// src/utils/encryption.ts
import CryptoJS from "crypto-js";

const FRAME_SIZE = 10 * 60 * 1000; // 10 min

function deriveKey(windowOffset = 0): string {
  const baseSecret = import.meta.env.VITE_ENCRYPTION_BASE_SECRET || "fallback-secret";
  const frame = Math.floor(Date.now() / FRAME_SIZE) + windowOffset;
  return CryptoJS.SHA256(baseSecret + frame.toString()).toString();
}

export function encryptPassword(password: string, ttlMinutes = 10) {
  const key = deriveKey();
  const iv = CryptoJS.lib.WordArray.random(16);

  const payload = JSON.stringify({
    password,
    expiresAt: Date.now() + ttlMinutes * 60 * 1000,
  });

  const encrypted = CryptoJS.AES.encrypt(payload, CryptoJS.enc.Hex.parse(key), {
    iv,
    mode: CryptoJS.mode.GCM,
    format: CryptoJS.format.OpenSSL,
  });

  return {
    iv: iv.toString(CryptoJS.enc.Hex),
    ciphertext: encrypted.ciphertext.toString(CryptoJS.enc.Hex),
    salt: encrypted.salt?.toString(CryptoJS.enc.Hex) || "",
    expiresAt: Date.now() + ttlMinutes * 60 * 1000,
  };
}

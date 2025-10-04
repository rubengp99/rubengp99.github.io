import crypto from "crypto";

const ALGO = "aes-256-gcm";

// Derive a rotating secret key based on current 10-min window
function deriveKey(windowOffset = 0) {
  const baseSecret = process.env.VITE_ENCRYPTION_BASE_SECRET || "fallback-secret";

  // Current 1-minute frame
  const frame = Math.floor(Date.now() / (60 * 1000)) + windowOffset;

  return crypto
    .createHash("sha256")
    .update(baseSecret + frame.toString())
    .digest(); // 32-byte key
}

interface EncryptedData {
  iv: string;
  tag: string;
  ciphertext: string;
  expiresAt: number;
}

// Encrypt password with automatic 1-min rotating key
export function encryptPassword(
  password: string,
  ttlMinutes = 1
): EncryptedData {
  const iv = crypto.randomBytes(16);
  const key = deriveKey();

  const cipher = crypto.createCipheriv(ALGO, key, iv);
  const expiresAt = Date.now() + ttlMinutes * 60 * 1000;

  const payload = JSON.stringify({ password, expiresAt });

  let encrypted = cipher.update(payload, "utf8", "hex");
  encrypted += cipher.final("hex");
  const tag = cipher.getAuthTag().toString("hex");

  return {
    iv: iv.toString("hex"),
    tag,
    ciphertext: encrypted,
    expiresAt,
  };
}
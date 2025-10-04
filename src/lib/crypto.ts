const FRAME_SIZE = 60 * 1000; // 1 minute

function toHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}

async function getCryptoKey(secret: string, offset = 0) {
  const frame = Math.floor(Date.now() / FRAME_SIZE) + offset;
  const encoder = new TextEncoder();
  const keyMaterial = encoder.encode(secret + frame.toString());
  const hash = await crypto.subtle.digest("SHA-256", keyMaterial);
  return crypto.subtle.importKey("raw", hash, "AES-GCM", false, ["encrypt", "decrypt"]);
}

export async function encryptPassword(password: string, ttlMinutes = 10) {
  const secret = import.meta.env.VITE_ENCRYPTION_BASE_SECRET || "fallback-secret";
  const key = await getCryptoKey(secret);

  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encoder = new TextEncoder();

  const payload = JSON.stringify({
    password,
    expiresAt: Date.now() + ttlMinutes * 60 * 1000,
  });

  const ciphertext = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    encoder.encode(payload)
  );

  return {
    iv: toHex(iv.buffer),
    ciphertext: toHex(ciphertext),
    expiresAt: Date.now() + ttlMinutes * 60 * 1000,
  };
}

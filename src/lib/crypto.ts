const FRAME_SIZE = 60 * 1000; // 1 min rotation frame

// --- HEX HELPERS ---
export function toHex(data: ArrayBuffer | Uint8Array): string {
  const u8 = data instanceof Uint8Array ? data : new Uint8Array(data);
  return Array.from(u8).map(b => b.toString(16).padStart(2, "0")).join("");
}

export function hexToBytes(hex: string): Uint8Array {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
  }
  return bytes;
}

// --- KEY DERIVATION ---
async function getCryptoKey(secret: string, offset = 0, usage: KeyUsage[] = ["encrypt", "decrypt"]) {
  const frame = Math.floor(Date.now() / FRAME_SIZE) + offset;
  const encoder = new TextEncoder();
  const keyMaterial = encoder.encode(secret + frame.toString());
  const hash = await crypto.subtle.digest("SHA-256", keyMaterial);
  return crypto.subtle.importKey("raw", hash, "AES-GCM", false, usage);
}

// --- ENCRYPT ---
export async function encryptPassword(password: string, ttlMinutes = 10) {
  const secret = import.meta.env.VITE_ENCRYPTION_BASE_SECRET;
  const key = await getCryptoKey(secret, 0, ["encrypt"]);

  if (!secret || secret == "") {
    console.error("no valid secret found")
    return
  }

  if (!password || password == "") {
    console.error("no valid password found")
    return
  } 

  const iv = crypto.getRandomValues(new Uint8Array(12)); // 96-bit nonce
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
    iv: toHex(iv),
    ciphertext: toHex(new Uint8Array(ciphertext)),
    expiresAt: Date.now() + ttlMinutes * 60 * 1000,
  };
}
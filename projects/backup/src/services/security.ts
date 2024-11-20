import * as SecureStore from 'expo-secure-store';
import * as Crypto from 'expo-crypto';

export async function encryptAndStore(key: string, value: string) {
  const hash = await Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA256,
    value
  );
  await SecureStore.setItemAsync(key, hash);
}

export async function verifyStoredValue(key: string, value: string) {
  const storedHash = await SecureStore.getItemAsync(key);
  const hash = await Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA256,
    value
  );
  return storedHash === hash;
}
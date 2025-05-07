function isAvailable(): boolean {
 try {
  return typeof window !== 'undefined';
 } catch (error) {
  console.warn(error);
  return false;
 }
}

function get(key: string) {
 const isServer = !isAvailable();
 if (isServer) return;

 return localStorage.getItem(key);
}

function set(key: string, value: string) {
 if (!isAvailable()) return;

 localStorage.setItem(key, value);
}

function remove(key: string) {
 if (!isAvailable()) return;
 localStorage.removeItem(key);
}

export default {
 get,
 set,
 remove,
 isAvailable,
};

let db;

export default function getDB() {
  if (!db) {
    db = new Promise(function(resolve, reject) {
      let openreq = indexedDB.open("waterdom", 1);
      openreq.onerror = function() {
        reject(openreq.error);
      };
      openreq.onupgradeneeded = function() {
        openreq.result.createObjectStore("waterdom");
      };
      openreq.onsuccess = function() {
        resolve(openreq.result);
      };
    });
  }
  return db;
} // </ getDB() >

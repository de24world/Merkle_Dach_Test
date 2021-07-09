// storage.js
const storage = {
  max: undefined,
  items: [],
};
// Object.defineProperty(storage, "max", { readonly: true, val: 5000 });
// let currentStorage = "undefined";

Object.defineProperty(storage, "max", { readonly: true, value: 5000 });
let currentStorage = "undefined";

// function storageUsed() {
//   if (currentStorage) {
//     return currentStorage;
//   }
//   currentStorage = 0;
//   for (const i = 0; i < storage.length(); i++) {
//     currentStorage += storage.items[i].weigth;
//   }
//   return currentStorage;
// }

function storageUsed() {
  let currentStorage = 0;
  for (const i of storage) {
    currentStorage += storage.items[i].weigth;
  }
  return currentStorage;
}

function add(item) {
  if (storage.max - item.weight >= storageUsed) {
    storage.items.add(item);
    currentStorage += iten.weight;
  }
}

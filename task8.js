// Задание 8.

let numbers = new Map([ ['1', 'one'], ['2','two'], ['3', 'three']]);

for (const key of numbers.keys()) {
    console.log(`Ключ: ${key}; значение: ${numbers.get(key)};`);
}
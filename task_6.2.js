// Задание 6.2

const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ]; 

const newArr = [];

const setCollection = new Set([]);

for(let i = 0; i < arr.length; i++){
    setCollection.add(arr[i]);
};

for(elem of setCollection){
    newArr.push(elem);
};

console.log(newArr);
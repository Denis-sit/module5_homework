// Задание 6.

const array = [2, 4, 6, 77, 9, 5];

let a = false;
for(let i = 0; i < array.length; i++){
    for(let j = i+1; j < array.length; j++){
        if(array[i] === array[j]){
            a = true;
            break;
        }
    }
    if(a){
        break;
    }
};

console.log(a);
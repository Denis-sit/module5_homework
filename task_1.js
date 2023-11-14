// Задание 1

const obj = {name: 'Ivan', age: 20};

function outputProperties(obj){
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key);
        }
    }
}

outputProperties(obj);
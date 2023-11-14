// Задание 2

const obj = {
    car: 'Audi',
    price: 1000000        
};

function checkingTheProperties(obj, str){
    return str in obj;
}

console.log(checkingTheProperties(obj, 'cars'));
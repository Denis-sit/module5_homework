// Задание 6.3
const arrNumber = [];
const userNumber = +prompt('Введите любое число', '');
console.log(typeof(userNumber));
if(typeof(userNumber) === 'number' && !isNaN(userNumber) && userNumber != ''){
    for(let i = 0; i <= userNumber; i++){
        arrNumber.push(i);
    };
}else{
    alert('Упс, похоже вы ввeли не число');
};

console.log(arrNumber);
  
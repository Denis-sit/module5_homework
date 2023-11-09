// Задание 1

const arrData = [3, 5, 10, 500, 'ivi', NaN, false, 0, undefined];
let evenNumbers = 0,
oddNumbers = 0, 
numberOfZeros = 0;

arrData.forEach(item => countEvenAndOddNumbers(item));

function countEvenAndOddNumbers(number){
        if(typeof(number) === 'number' && !isNaN(number) && number !== 0){
            if(number % 2 == 0 ){
                evenNumbers++;
            }else{
                oddNumbers++;
            }
        }else
        if(number === 0){
            numberOfZeros++;
        }
};



console.log(`Количество четных чисел составляет ${evenNumbers}`);
console.log(`Количество нечетных чисел составляет ${evenNumbers}`);
console.log(`Количество нулей составляет ${numberOfZeros}`);
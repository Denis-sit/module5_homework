// Задание 3

function  outputsTheSumOfTheNumbers(a){
    return function(b){
        console.log(a + b);
    }
}

const result = outputsTheSumOfTheNumbers(5);
result(3);
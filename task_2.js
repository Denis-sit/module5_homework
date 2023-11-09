// Задание 2

function checkingAPrimeNumber(number){
    if(typeof(number) === 'number' && number < 1000 && number > 1 && !isNaN(number)){
        if(number === 2){
            let primeNumber = true;
        }else{
            for(let i = 2; i < number; i++){
                console.log(number);
                if( number % i !== 0){
                    primeNumber = true;
                }else{
                    primeNumber = false;
                    break;
                }
            }
        }

        if(primeNumber){
            console.log('Число является простым');
        }else{
            console.log('Число не является простым');
        }

    }else
    if(number < 2 && number > -1){
        console.log('Данное число не относят ни к одной из групп чисел');
    }else{
        console.log('Данные не верны');
    }
};

checkingAPrimeNumber(+prompt('Введите любое число от 1 до 1000', ''));
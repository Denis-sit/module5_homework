// Задание 10.5

const userAge = +prompt('Сколько вам лет?', '');

if(typeof(userAge) === 'number' && !isNaN(userAge) && userAge !== ''){
    let loanAmount, maxloanAmount;
    if(userAge < 18){
        alert('Вы еще малы чтобы брать кредит');
    }else 
    
    if(18 <= userAge  && userAge <= 21){
        maxloanAmount = 50000;
        loanAmount = prompt(`Мы можем выдать вам максимум ${maxloanAmount}.
                Введите сумму кратную 1000`, '');
        checkTheEnteredAmount(+loanAmount,maxloanAmount );
    }else 
    
    if(22 <= userAge && userAge <= 35){
        maxloanAmount = 400000;
        loanAmount = prompt(`Мы можем выдать вам максимум ${maxloanAmount}.
                Введите сумму кратную 1000`, '');
        checkTheEnteredAmount(+loanAmount, maxloanAmount);
    }else 
    
    if(36 <= userAge && userAge <= 65){
        maxloanAmount = 1000000;
        loanAmount = prompt(`Мы можем выдать вам максимум ${maxloanAmount}.
                Введите сумму кратную 1000`, '');
        checkTheEnteredAmount(+loanAmount, maxloanAmount);
    }else{
        alert('Вы уже слишком стары чтобы брать кредит');
    }
    
}      

function checkTheEnteredAmount(sum, maxSum){
    if(sum <= maxSum && sum != 0){
        if(sum % 1000 !== 0){
            alert(`Вы ввели значение не кратное 1000. Мы можем выдать вам ${Math.ceil(sum / 1000) * 1000}`);
        }else{
            alert(`Мы можем выдать вам ${sum}`);
        }
    }else{
        alert('Видимо кредит Вам не нужен. Всего доброго!');
    }
}
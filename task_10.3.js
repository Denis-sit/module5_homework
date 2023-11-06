// Задание 10.3

const userName = prompt('Введите ваше имя', 'Пользователь'),
      userYearOfBirth = prompt('Введите ваш год рождения','');

if(typeof(+userYearOfBirth) === 'number' && !isNaN(userYearOfBirth) && userYearOfBirth !== ''){
    if(userYearOfBirth > 2023){
        alert('Вы не можете быть настолько старым');
    }else{
        alert(`${userName}: ${2023 - userYearOfBirth}`);
    }
}else{
    alert(`Год должен быть числом!`);
}

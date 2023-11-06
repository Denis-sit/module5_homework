// Задание 10.4
const userName = prompt('Введите ваше имя', ''),
      userYearOfBirth = prompt('Сколько вам лет?','');

switch (+userYearOfBirth % 10){
    case 1:
        alert(`${userName}: ${userYearOfBirth} год`);
        break;
    case 2:
    case 3:
    case 4:        
        alert(`${userName}: ${userYearOfBirth} года`);
        break;
    default:
        alert(`${userName}: ${userYearOfBirth} лет`);          
};
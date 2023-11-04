// Задание 2.
let x = undefined;
switch (typeof(x)){
    case 'number':
        console.log('Число');
        break;
    case 'string':
        console.log('Строка');
        break;
    case 'boolean':
        console.log('Логическое значение');
        break;
    default:
        console.log('Тип x не определён');
};
// Задание 10.2
const promoCode = 'skillfactory';
const userPromoCode = prompt('Введите промокод:','');

if(promoCode === userPromoCode.toLowerCase()){
    alert('Промокод применен');
}else{
    alert('Промокод не работает');
}
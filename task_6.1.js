// Задание 6.1

const str = prompt('Ведите текст', '');

function weCheckForPolymorphism(item){
    let  str2 = item.split('').reverse().join('');
    if(str.toLocaleLowerCase().replaceAll(' ','') === str2.toLocaleLowerCase().replaceAll(' ','')){
        console.log(`"${str}" является полиморфом`);
    }else{
        console.log(`"${str}" не является полиморфом`);
    }
};

weCheckForPolymorphism(str);


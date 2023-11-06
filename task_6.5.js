// Задание 6.5

const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};

const arrValues = [];

for(let key in obj){
    if(typeof(obj[key]) !== 'string'){
        obj[key].forEach(item =>{
            arrValues.push(item);
        });
    }else{
        arrValues.push(obj[key]);
    }
};

console.log(arrValues);
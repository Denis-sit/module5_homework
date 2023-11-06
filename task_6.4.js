// Задание 6.4

for(let i = 0; i < 3; i++){
    let line = '';
    for(let row = 0; row < 3; row++){
        if((i + row) % 2 === 0){
            line +=`x`;
        }else{
            line +=`o`;
        }
    }
    console.log(line);
}


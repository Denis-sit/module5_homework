function weOutputTheNumbersInOrder(a, b){
       const interval = setInterval(() =>{
        if(a === b){
            clearInterval(interval);
        }
        console.log(a++);
       }, 1000);
};

weOutputTheNumbersInOrder(3, 18);





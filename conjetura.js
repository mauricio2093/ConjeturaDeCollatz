let n = prompt("Ingresa un Numero");

const similarity = (n) => {
    cp = n % 2 === 0;
    return collatz(cp , n);
}

const collatz = (cp , n) => {
    if(n !=1){
        if(cp === true){
            n = n/2;
            console.log(`${n}`);
            return similarity(n)
        }else{
            n = (n*3 + 1)
            console.log(`${n}`);
            return similarity(n)
        };
    };
    
}

similarity(n);

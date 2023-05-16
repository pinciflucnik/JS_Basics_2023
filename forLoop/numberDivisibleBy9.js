function numberDivisibleBy9(arg){
    let a = Number(arg[0]);
    let b = Number(arg[1]);
    let c = 0;
    for (a=a; a<=b; a++){
        if (a % 9 ==0){
        c = c +a;
        }    
    }
    console.log(`The sum: ${c}`);
    for (a=Number(arg[0]); a<=b; a++){
        if (a % 9 ==0){
         console.log(a);
        }  
    }
}
numberDivisibleBy9(["100","200"]);
function multiply(arg){
    let number;
    let i =0
    do {
        number = Number(arg[i]);
        let result = number * 2;
        if (number >= 0 ){
        console.log(`Result: ${result.toFixed(2)}`);
        i = i + 1;
        }
    }
    while (number >= 0);
    console.log("Negative number!");
}
multiply(["12", "43.2144", "12.3", "543.23", "-20"])
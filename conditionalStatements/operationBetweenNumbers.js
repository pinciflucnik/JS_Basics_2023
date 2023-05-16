function operationWithNumbers(arg){

    let n1 = Number(arg[0]);
    let n2 = Number(arg[1]);
    let operation = arg[2];
    let n3;
    let evenOdd;

    if (operation === "+"){
        n3 = n1 + n2;
        if (n3 % 2 == 0){
            evenOdd = "even"
        }
        else {
            evenOdd = "odd"
        }
    }
    else if (operation === "-"){
        n3 = n1 - n2;
        if (n3 % 2 == 0){
            evenOdd = "even"
        }
        else {
            evenOdd = "odd"
        }
    }
    else if (operation === "*"){
        n3 = n1 * n2;
        if (n3 % 2 == 0){
            evenOdd = "even"
        }
        else {
            evenOdd = "odd"
        }
    }
    else if (operation === "/"){
        if (n2 === 0){
            console.log(`Cannot divide ${n1} by zero`);
        }
        else {
            n3 = n1 / n2;
            n3 = n3.toFixed(2);
        }
    }
    else if (operation === "%") {

        n3 = n1 % n2;
    }
    switch (operation){
        case "+":
        case "-":
        case "*":
            console.log(`${n1} ${operation} ${n2} = ${n3} - ${evenOdd}`);
            break;
        case "/":
            if (n2 !== 0){
                console.log(`${n1} / ${n2} = ${n3}`);
            }
            break;
        case "%":
            if (n2 !== 0){
            console.log(`${n1} % ${n2} = ${n3}`);
        }
        else{
            console.log(`Cannot divide ${n1} by zero`);
        }
            break;
    }
}
operationWithNumbers(["7",
"3",
"*"])
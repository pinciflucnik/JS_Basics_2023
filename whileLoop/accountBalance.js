function accountBalance(input){
    let i = 0;
    let userInput;
    let balance = 0;
    while (i <= input.length){
        userInput = input[i];
         if (userInput == "NoMoreMoney"){
            break;
         }
         else if (Number(userInput)>= 0){
            balance += Number(userInput);
            console.log(`Increase: ${Number(userInput).toFixed(2)}`);
         }
         else if (Number(userInput)<0){
            console.log(`Invalid operation!`);
            break;
         }
        
         i ++;
    }
    console.log(`Total: ${balance.toFixed(2)}`);

}
accountBalance(["120",
"45.55",
"-150"])
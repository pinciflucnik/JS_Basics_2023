function numbersDividedBy3 (input){
    let currentNumber = 3;
    while (currentNumber <= 100){
        if (currentNumber % 3 ==0){
            console.log(currentNumber);
        }
        currentNumber = currentNumber + 3;
    }
}
numbersDividedBy3()
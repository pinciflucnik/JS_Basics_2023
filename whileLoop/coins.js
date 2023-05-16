function coins(input){
    let change = Number(input[0])*100
    change = Math.round(change);
    let coinCount = 0
    while (change > 0){
        if (change >= 200){
            change -= 200;
            coinCount ++;
        }
        else if ( change >= 100){
            change -= 100;
            coinCount ++;
        }
        else if (change >= 50){
            change -= 50;
            coinCount ++;
        }
        else if (change >= 20){
            change -= 20;
            coinCount ++;
        }
        else if (change >= 10){
            change -= 10;
            coinCount ++;
        }
        else if (change >= 5){
            change -= 5;
            coinCount ++;
        }
        else if (change >= 2){
            change -= 2;
            coinCount ++;
        }
        else if (change >= 1){
            change -= 1;
            coinCount ++;
        }
    }
    console.log(coinCount);
}
coins(["2.73"])
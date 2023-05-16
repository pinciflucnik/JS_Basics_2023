function profit(input){
    let coinOne = Number(input[0]);
    let coinTwo = Number(input[1]);
    let billFive = Number(input[2]);
    let sum = Number(input[3]);
    let countOne = 0;
    let countTwo = 0;
    let countFive = 0;
     for(a = 0; a<=coinOne; a++){
        for(b = 0; b<=coinTwo; b++){
            for(c = 0; c<=billFive; c++){
                if ((a*1) + (b*2) + (c*5) === sum){
                    countOne = a;
                    countTwo = b;
                    countFive = c;
                    console.log(`${countOne} * 1 lv. + ${countTwo} * 2 lv. + ${countFive} * 5 lv. = ${sum} lv.`);
                }
            }
        }
     }


}
profit(["5", "3", "1", "7"])
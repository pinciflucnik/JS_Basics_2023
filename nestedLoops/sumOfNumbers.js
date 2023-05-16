function sumOfNumbers(input){
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magic = Number(input[2]);
    let allCounter = 0;
    // let counter = 0;
    let isTrue = false;
    for (x1 = start; x1 <= end; x1++){
        for (x2 = start; x2 <= end; x2++){
            allCounter ++;
            if (x1 + x2 == magic){
                // counter ++;
                isTrue = true;
                if (isTrue){
                    console.log(`Combination N:${allCounter} (${x1} + ${x2} = ${magic})`);
                    break;
                }
            }
        }
        if (isTrue){
            break;
        }
    }
    if (!isTrue){
        console.log(`${allCounter} combinations - neither equals ${magic}`);

    }
}
sumOfNumbers(["88", 
"888", 
"2000"])
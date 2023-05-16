function sum(input){
    let start = Number(input[0]);
    let end = Number(input[1]);
    let isNotFound = true;
    let buff2 = "";
    for (i = start; i <= end; i++){
        let buff = String(i);
        let sumEven = 0;
        let sumOdd = 0;
        for (m = 0; m < buff.length; m++){

        if (m % 2 === 0){
        let evenPosition = Number(buff.charAt(m));
            sumEven += evenPosition;
        }
        else{
            let oddPosition = Number(buff.charAt(m));
            sumOdd += oddPosition;
        }
        }
        if (sumEven === sumOdd){
            buff2 = buff2 + i + " ";
            isNotFound = false;
        }

    }
    // if (isNotFound){


    // }
    console.log(buff2);
    
}
sum(["100000",
"100050"])
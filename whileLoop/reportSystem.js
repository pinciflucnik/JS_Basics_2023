function reportSystem(input){
    let index = 0;
    let endSum = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let cashCounter = 0;
    let cardCounter = 0;
    let cashPayment = 0;
    let cardPayment = 0;
    let averageCS = 0;
    let averageCC = 0;


    while (command !== "End"){
        let payment = Number(command);

        command = input[index];
        

        if (index % 2 == 0 && payment > 100){
            console.log(`Error in transaction!`);
            
        }
        else if (index % 2 == 1 && payment < 10){
            console.log(`Error in transaction!`);
            
        }
        else if(endSum > 0 && index % 2 ==0){
            console.log(`Product sold!`);
            cashCounter ++;
            cashPayment += payment;
            endSum -= payment;
            averageCS = cashPayment/cashCounter;
            
        }
        else if(endSum > 0 && index % 2 == 1){
            console.log(`Product sold!`);
            cardCounter ++;
            cardPayment += payment;
            endSum -= payment;
            averageCC = cardPayment/cardCounter;
            

        }
        if (endSum <= 0){
            console.log(`Average CS: ${averageCS.toFixed(2)}`);
            console.log(`Average CC: ${averageCC.toFixed(2)}`);
            break;

        }
        index++;
    }
    if (command === "End"){
        console.log(`Failed to collect required money for charity.`);
    }
}
reportSystem(["600",
    "86",
    "150",
    "98",
    "227",
    "End",
    "317"])
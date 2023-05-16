function equalPairs(input){
    let pairs = Number(input[0]);
    let num2 = Number(input[1]);
    let num3 = Number(input[2]);
    let sum2 = num2 + num3;
    let difference = 0;
    let value = 0;
    let difference2 = 0;
    for (i= 1; i<= pairs*2; i+= 2){
        let numA = Number(input[i]);
        let numB = Number(input[i+1]);
        let sum = numA + numB;
            if (sum2 > sum){
                difference2 = sum2 - sum;

            }
            else if (sum > sum2){
                difference2 = sum - sum2;
            }
            else {
                value = sum;
            }
            if (difference < difference2){
                difference = difference2;
            }
        sum2 = sum;
        

        
    }
        if (value === sum2){
            console.log(`Yes, value=${value}`);
        }
        else {
            console.log(`No, maxdiff=${difference}`);
        }

}
equalPairs(["2", "1", "2", "2", "2"])
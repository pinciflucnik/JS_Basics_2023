function oddEvenPosition(input){
    let numberCount = Number(input[0]);
    let oddSum = 0;
    let evenSum = 0;
    let oddMin = Number(input[1]);
    let evenMin = Number(input[2]);
    let oddMax = Number(input[1]);
    let evenMAx = Number(input[2]);


    for (i = 1; i <= numberCount; i++){
        let currentNum = Number(input[i]);
        if (i % 2 != 0){
            oddSum += currentNum;
            if (currentNum < oddMin){
                oddMin = currentNum;
            }
            else if (currentNum > oddMax) {
                oddMax = currentNum;
            }
        }
        else if (i % 2 == 0){
            evenSum += currentNum;
            if (currentNum < evenMin){
                evenMin = currentNum;
            }
            else if (currentNum > evenMAx) {
                evenMAx = currentNum;
            }
        }
     }
     console.log(`OddSum=${oddSum.toFixed(2)},`)

     if (isNaN(oddMax) || isNaN(oddMin)){
        console.log(`OddMin=No,`)
        console.log(`OddMax=No,`)
     }
     else {
        console.log(`OddMin=${oddMin.toFixed(2)},`);
        console.log(`OddMax=${oddMax.toFixed(2)},`);
        }

        console.log(`EvenSum=${evenSum.toFixed(2)},`);


     if (isNaN(evenMAx) || isNaN(evenMin)){
        console.log(`EvenMin=No,`);
        console.log(`EvenMax=No`);
     }
     else {
        console.log(`EvenMin=${evenMin.toFixed(2)},`);
        console.log(`EvenMax=${evenMAx.toFixed(2)}`);
    }
}
    //  console.log(`OddSum=${oddSum.toFixed(2)},`);
    //  console.log(`OddMin=${oddMin},`);
    //  console.log(`OddMax=${oddMax},`);
    //  console.log(`EvenMin=${evenMin},`);
    //  console.log(`EvenMax=${evenMAx}`);     

oddEvenPosition(["6", "2", "3", "5", "4", "2", "1"])
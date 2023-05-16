function maxNumber(input){
    let i =0;
    let maxNumber=Number(input[1]);
    while (i <= input.length){
        let currenNumber = input[i];
        if (currenNumber == "Stop"){
            break;
        }
        else if (Number(currenNumber > maxNumber)){
            maxNumber = Number(currenNumber);
        }
        i++;
    }
    console.log(maxNumber);

}
maxNumber(["-10",
"-5",
"-30",
"Stop"])
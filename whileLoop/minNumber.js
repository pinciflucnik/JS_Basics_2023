function    minNumber(input){

    let  i=0;
    let minNumber = Number(input[1]);
    while (i <= input.length){
        let currenNumber = input[i];
        if (currenNumber == "Stop"){
            break;
        }
        else if (Number(currenNumber)< minNumber){
            minNumber = Number(currenNumber);
        }
        i++;
    }
    console.log(minNumber);
}
minNumber(["-10",
"20",
"-30",
"Stop"])
function traveling(input){
    let index = 0;
    let destination = input[index];
    index++;
    let budget = Number(input[index]);
    index++;
    let savedMoney = Number(input[index]);
    index++;
    let totalSavedMoney = 0;
    
    while (destination !== "End"){
        totalSavedMoney += savedMoney
        if (totalSavedMoney >= budget){
            console.log(`Going to ${destination}`);
            destination = input[index];
            index++;
            budget = Number(input[index]);
            index ++;
            totalSavedMoney = 0;

        }
        savedMoney = Number(input[index]);
        index++;

    }
}
traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])
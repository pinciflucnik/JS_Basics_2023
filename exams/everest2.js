function everest(input){
    let index = 0;
    let command = input[index];
    index++;

    let climbed = false;
    let climbedTotal = 5364;
    let daysTotal = 1;
    let daysWithoutRest = 0;
     
    while (command !== "END"){
        let rest = command;
        if (rest === "Yes"){
            daysTotal ++;
        }
        else if ( rest === "No"){
            daysWithoutRest ++;
        }
        if (daysWithoutRest > 5){
            break;
        }
        let climbedToday = Number(input[index]);
        index ++;
        let climbedYestarday = climbedToday;

    
        climbedTotal += climbedToday;

        if (climbedTotal >= 8848){
            console.log(`Goal reached for ${daysTotal} days!`);
            climbed = true;
            break;
        }

        
        command = input[index];
        index ++;
        if (command === undefined && climbedTotal < 8848){
            climbedTotal -= climbedYestarday;
            break;
        }
    }
    if (climbed === false){
        console.log(`Failed!`);
        console.log(`${climbedTotal}`);
    }
}
everest(["Yes",
"535",
"Yes",
"849",
"Yes",
"499",
"Yes",
"400",
"Yes",
"500"])
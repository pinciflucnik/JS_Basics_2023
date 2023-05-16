function everest(input){
    let metersClimbed = 5364;
    let index = 0;
    let command = input[index];
    index++;
    let daysWithoutRest = 0;
    let totalDaysCount = 1;

    while (command !== "END"){
        let spendTheNight = command;
        totalDaysCount ++;

         switch (spendTheNight){
            case "No": daysWithoutRest ++;
                break;
            case "Yes": daysWithoutRest = 0;
                break;
         }
         if (daysWithoutRest > 5){
            break;
         }

         let currentClimb = Number(input[index]);
         index++;

         metersClimbed += currentClimb;

         if (metersClimbed >= 8848){
            console.log(`Goal reached for ${totalDaysCount} days!`);
            break;
         }




        command = input[index];
        index++
        if (command === undefined){
            break;
        }
    }
    if (command === "END" || daysWithoutRest === 5 || metersClimbed < 8848){
        console.log(`Failed!`);
        console.log(`${metersClimbed}`);
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
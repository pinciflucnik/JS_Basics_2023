function vacation(input){
    let vacationCost = Number(input[0]);
    let ballance = Number(input[1]);
    let i = 2;
    let spend = 0;
    let dayCount = 0;
    while (i <= input.length + 2){
        dayCount ++;
        let type = input[i];
        let sum = Number(input[i+1]);
        switch (type){
            case "save": ballance += sum;
            spend = 0;
                break;
            case "spend": ballance -= sum;
            spend ++;
                break;
        }
        if (ballance < 0 ){
            ballance = 0;
        }
        else if (ballance >= vacationCost){
            console.log(`You saved the money for ${dayCount} days.`); return;
        }
        if (spend >= 5){
            console.log(`You can't save the money.`);
            console.log(dayCount);
            return;
        }
        i += 2;
    }
}
vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])
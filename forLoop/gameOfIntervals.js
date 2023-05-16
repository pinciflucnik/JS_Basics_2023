function gameOfIntervals(input){
    let turns = Number(input[0]);
    let sum = 0;
    let to9 = 0;
    let to19 = 0;
    let to29 = 0;
    let to39 = 0;
    let to50 = 0;
    let invalid = 0;
    for (i = 1; i <= turns; i++){
        let num = Number(input[i]);
        if (num >= 0 && num <= 9 ){
            sum += num*0.2;
            to9 ++;
        }
        else if (num >= 0 && num <= 19){
            sum += num*0.3;
            to19 ++;
        }
        else if (num >= 0 && num <= 29){
            sum += num*0.4;
            to29 ++;
        }
        else if (num >= 0 && num <= 39){
            sum += 50;
            to39 ++;
        }
        else if (num >= 0 && num <= 50){
            sum += 100;
            to50 ++;
        }
        else{
            sum = sum/2;
            invalid ++;
        }
    }
    let to9Percent = to9/turns*100;
    let to19Percent = to19/turns*100;
    let to29Percent = to29/turns*100;
    let to39Percent = to39/turns*100;
    let to50Percent = to50/turns*100;
    let invalidPercent = invalid/turns*100;

    console.log(sum.toFixed(2));
    console.log(`From 0 to 9: ${to9Percent.toFixed(2)}%`);
    console.log(`From 10 to 19: ${to19Percent.toFixed(2)}%`);
    console.log(`From 20 to 29: ${to29Percent.toFixed(2)}%`);
    console.log(`From 30 to 39: ${to39Percent.toFixed(2)}%`);
    console.log(`From 40 to 50: ${to50Percent.toFixed(2)}%`);
    console.log(`Invalid numbers: ${invalidPercent.toFixed(2)}%`);
}
gameOfIntervals(["10","43","57", "-12", "23", "12", "0", "50", "40", "30", "20" ])
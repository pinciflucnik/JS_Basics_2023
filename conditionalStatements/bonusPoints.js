function allPoints(arg){

    let points = Number(arg[0]);
    let bonusPoints = 0;
    if (points % 10 ==5){
        bonusPoints = bonusPoints + 2;
    }
    
    if (points <= 100){
        bonusPoints = bonusPoints + 5;
    }

    else {
        if (points <= 1000){

            bonusPoints = points*1.2 - points + bonusPoints
        }
        else {

            bonusPoints = points*1.1 - points + bonusPoints
        }
    }
    if (points % 2 == 0){
        bonusPoints = bonusPoints + 1;
    }
    let combined = bonusPoints + points;
    console.log(bonusPoints);
    console.log(combined)
}
allPoints(["2703"])
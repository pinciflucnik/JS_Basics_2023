function oscars(arg) {
    let actorName = arg[0];
    let academyPoints = Number(arg[1]);
    let judgeCount = Number(arg[2]);
    let totalPoints =0;
    let givenPoints = 0;
    let m =0;

    for (i = 3; i <= (judgeCount*2)+2; i++){
        let judgeName = arg[i];
        let judgePoints = Number(arg[i+1]);
        i+=1;
        for (m = 0; m < judgeName.length; m++ ){
        }
        givenPoints = givenPoints + (m*judgePoints)/2;
        totalPoints = givenPoints + academyPoints;
        if (totalPoints >= 1250.5){
            return console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
        }
    }
    let pointsNeeded = 1250.5 - totalPoints; 
            console.log(`Sorry, ${actorName} you need ${pointsNeeded.toFixed(1)} more!`);
}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
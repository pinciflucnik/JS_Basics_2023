function backToThePast(arg){
    let inheritance = Number(arg[0]);
    let  endYear = Number(arg[1]);
    let age = 18;
    let startYear = 1800;
    let moneySpent = 0;
    let period = endYear - startYear;

    for (i = 0; i <= period ; i++){
        if (startYear % 2 == 0){
            	moneySpent = moneySpent + 12000;
        }
        else {
            moneySpent = moneySpent + (12000 +(50*age));
        }
        age += 1;
        startYear += 1;
    }
    if (moneySpent <= inheritance){
        let moneyLeft = inheritance - moneySpent;
        console.log(`Yes! He will live a carefree life and will have ${moneyLeft.toFixed(2)} dollars left.`);
    }
    else {
        let moneyNeeded = moneySpent - inheritance;
        console.log(`He will need ${moneyNeeded.toFixed(2)} dollars to survive.`);
    }


}
backToThePast(["100000.15"
,"1808"])
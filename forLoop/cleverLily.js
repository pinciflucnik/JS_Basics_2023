function cleverLily(arg){
    let age = Number(arg[0]);
    let mashinePrice = Number(arg[1]);
    let toyPrice = Number(arg[2]);
    let evenBdays = 0;
    let toyCount = 0;
    let moneyFromBdays = 0;

    for (i=1; i<= age; i++){
        if (i % 2 == 0){
            evenBdays += 1;
            moneyFromBdays = moneyFromBdays + evenBdays*10

        }
        else {
            toyCount += 1;
        }
    }
   
    let totalBudget = toyCount*toyPrice + (moneyFromBdays-evenBdays);
    if (totalBudget>=mashinePrice){
        let moneyLeft = totalBudget - mashinePrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    }
    else {
        let moneyNeeded = mashinePrice - totalBudget;
        console.log(`No! ${moneyNeeded.toFixed(2)}`);
    }
}
cleverLily(["21",
"1570.98",
"3"])
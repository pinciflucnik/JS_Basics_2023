function vacation(arg){

    let vacationPrice = Number(arg[0]);

    let puzzleCount = Number(arg[1]);

    let dallCount = Number(arg[2]);

    let teddyBearCount = Number(arg[3]);

    let minionCount = Number(arg[4]);

    let truckCount = Number(arg[5]);

    let allCount = puzzleCount + dallCount + teddyBearCount + minionCount + truckCount;

    let puzzleAmmount = puzzleCount * 2.6;

    let dallAmmount = dallCount * 3;
    
    let teddyBearAmmount = teddyBearCount * 4.1;

    let minionAmmount = minionCount * 8.2;

    let truckAmmount = truckCount * 2;
    
    let allAmmount = puzzleAmmount + dallAmmount + teddyBearAmmount + minionAmmount + truckAmmount;

    if (allCount >= 50) {

        allAmmount = allAmmount * 0.75;
    
    }

    let rent = allAmmount * 0.1;
    
    let profit = allAmmount - rent;

    if (profit >= vacationPrice) {

        let sumLeft = (profit - vacationPrice).toFixed(2);
        
        console.log(`Yes! ${sumLeft} lv left.`)
    }
    else if (vacationPrice > profit) {
        
        let sumNeeded = (vacationPrice - profit).toFixed(2);

        console.log(`Not enough money! ${sumNeeded} lv needed.`)
    }
}
vacation(["320", "8", "2", "5", "5", "1"])
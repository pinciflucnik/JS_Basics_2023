function bills(input){
    let water = 20;
    let internet = 15;
    let montsCount = Number(input[0]);
    let sumElectricity = 0;
    let sumOthers = 0;
    for (i = 1; i <= montsCount; i++){
        let electricity = Number(input[i]);
        let others = (water + internet + electricity)*1.2;
        sumElectricity += electricity;
        sumOthers += others;
    }
    let waterTotal = water*montsCount;
    let internetTotal = internet*montsCount;
    let averageBills = (sumElectricity + sumOthers + waterTotal + internetTotal)/ montsCount;

    console.log(`Electricity: ${sumElectricity.toFixed(2)} lv`);
    console.log(`Water: ${waterTotal.toFixed(2)} lv`);
    console.log(`Internet: ${internetTotal.toFixed(2)} lv`);
    console.log(`Other: ${sumOthers.toFixed(2)} lv`);
    console.log(`Average: ${averageBills.toFixed(2)} lv`);
}
bills(["5", "68.63", "89.25", "132.53", "93.53", "63.22"])
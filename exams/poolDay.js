function totalExpence(arg){

    let numberOfPeople = Number(arg[0]);

    let entranceFee = Number(arg[1]);

    let sunLoungerFee = Number(arg[2]);

    let sunShadeFee = Number(arg[3]);

    let totalEntranceFee = numberOfPeople*entranceFee;

    let totalSunLoungeFee = (sunLoungerFee*Math.ceil(numberOfPeople*0.75));

    let totalSunShadeFee = (sunShadeFee*Math.ceil(numberOfPeople/2));

    console.log((totalEntranceFee + totalSunLoungeFee + totalSunShadeFee).toFixed(2)+" lv.");
}
totalExpence(["50","6","8","4"])
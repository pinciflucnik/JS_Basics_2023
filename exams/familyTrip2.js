function familyTrip(input){

    let budget = Number(input[0]);
    let nightsCount = Number(input[1]);
    let pricePerNight = Number(input[2]);
    let addExpencePercent = Number(input[3]);
    let addExpence = budget*(addExpencePercent/100);
    if (nightsCount > 7){
        pricePerNight = pricePerNight * 0.95;
    }
    let totalExpence =  nightsCount*pricePerNight + addExpence;
    if (budget >= totalExpence){
        let moneyLeft = budget - totalExpence;
        console.log(`Ivanovi will be left with ${moneyLeft.toFixed(2)} leva after vacation.`);
    }
    else {
        let moneyNeeded = totalExpence - budget;
        console.log(`${moneyNeeded.toFixed(2)} leva needed.`);
    }

}
familyTrip(["800.50", "8", "100", "2"])
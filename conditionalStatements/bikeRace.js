function bikeRace(arg){
    let juniorsCount = Number(arg[0]);
    let seniorsCount = Number(arg[1]);
    let trailType = arg[2];
    let juniorsPrice = 0;
    let seniorsPrice = 0;
    let totalIncome = 0;
    let taxDiscount = 1;

    if (trailType === "trail"){
        juniorsPrice = juniorsCount*5.5;
        seniorsPrice = seniorsCount*7;
    }
    else if (trailType === "cross-country"){
        juniorsPrice = juniorsCount*8;
        seniorsPrice = seniorsCount*9.5;
        if (juniorsCount + seniorsCount >= 50){
            taxDiscount = 0.75;
        }
    }
    else if (trailType === "downhill"){
        juniorsPrice = juniorsCount*12.25;
        seniorsPrice = seniorsCount*13.75;
    }
    else if (trailType === "road"){
        juniorsPrice = juniorsCount*20;
        seniorsPrice = seniorsCount*21.5;
    }
    totalIncome = (juniorsPrice + seniorsPrice)*taxDiscount*0.95;

    console.log(`${totalIncome.toFixed(2)}`);
}
bikeRace(["21", "26", "cross-country"])
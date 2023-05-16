function fishingBoat(arg){

    let budget = Number(arg[0]);

    let season = arg[1];

    let numberOfFisherman = Number(arg[2]);

    let shipRent = 0;

    switch (season){
        case "Spring":
            shipRent = 3000;
            break;
        case "Summer":
        case "Autumn":
            shipRent = 4200;
            break;
        case "Winter":
            shipRent = 2600;
            break;

    }
    if (numberOfFisherman <= 6){
        shipRent = shipRent * 0.9;
    }
    else if ( numberOfFisherman <= 11){
        shipRent = shipRent * 0.85;
    }
    else {
        shipRent = shipRent * 0.75;
    }
    if (season !== "Autumn"){
        if (numberOfFisherman % 2 === 0){
            shipRent = shipRent * 0.95;
        }
    }
    if (budget >= shipRent){
        let moneyLeft = budget - shipRent;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    }
    else {
        let moneyNeeded = shipRent - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
    }
}
fishingBoat(["3000",
"Summer",
"11"])
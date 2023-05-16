function budgetForParts(arg){

    let budget = Number(arg[0]);

    let videocards = Number(arg[1]);

    let processors = Number(arg[2]);

    let ramMemory = Number(arg[3]);

    let videocardsPrice = videocards * 250;

    let processorsPrice = processors * (videocardsPrice * 0.35);

    let ramMemoryPrice = ramMemory * (videocardsPrice * 0.10);

    let expences = videocardsPrice + processorsPrice + ramMemoryPrice;

    if (videocards > processors){

        expences = expences * 0.85;
    }

    if (budget >= expences){

        let moneyLeft = (budget - expences).toFixed(2);

        console.log(`You have ${moneyLeft} leva left!`);
    }
    else {

        let moneyNeeded = (expences - budget).toFixed(2);

        console.log(`Not enough money! You need ${moneyNeeded} leva more!`);
    }
}
budgetForParts(["920.45","3","1","1"])
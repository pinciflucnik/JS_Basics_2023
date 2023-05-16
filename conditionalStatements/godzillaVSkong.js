function movie(arg){

    let budget = Number(arg[0]);

    let extras = Number(arg[1]);

    let clothesPrice = Number(arg[2]);

    let decor = budget * 0.1;

    let allClothesPrice = extras * clothesPrice;

    if (extras > 150){

        allClothesPrice = allClothesPrice * 0.9;

    }

    let allExpences = decor + allClothesPrice;

    if (allExpences > budget){

        let moneyNeeded = (allExpences - budget).toFixed(2);

        console.log("Not enough money!");

        console.log(`Wingard needs ${moneyNeeded} leva more.`);
    }
    else {

        let moneyLeft = (budget - allExpences).toFixed(2);

        console.log("Action!");

        console.log(`Wingard starts filming with ${moneyLeft} leva left.`);
    }

}
movie(["9587.88", "222", "55.68"])
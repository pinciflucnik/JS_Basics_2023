function presentMoney(arg){

    let magnoliPrice = 3.25;

    let ziumbulPrice = 4;

    let rosePrice = 3.5;

    let cactusPrice = 8;

    let magnoliCount = Number(arg[0]);

    let ziumbulCoun = Number(arg[1]);

    let roseCount = Number(arg[2]);

    let cactusCount = Number(arg[3]);

    let presentPrice = Number(arg[4]);

    let income = magnoliCount*magnoliPrice + ziumbulCoun*ziumbulPrice + roseCount*rosePrice + cactusCount*cactusPrice;

    let inctomeAtferTax = income*0.95;

    if (inctomeAtferTax >= presentPrice){

        let moneyLeft = Math.floor(inctomeAtferTax - presentPrice);

        console.log(`She is left with ${moneyLeft} leva.`);
    }
    else {
        let moneyNeeded = Math.ceil(presentPrice - inctomeAtferTax);

        console.log(`She will have to borrow ${moneyNeeded} leva.`);
    }
}
presentMoney(["15", "7", "5", "10", "100"])
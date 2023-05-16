function budget(arg){

    let typeOfFlower = arg[0];

    let flowerQuantity = Number(arg[1]);

    let totalBudget = Number(arg[2]);

    let rosesPrice = 5;
    let dahliasPrice = 3.8;
    let tulipsPrice = 2.8;
    let narcissusPrice = 3;
    let gladiolusPrice = 2.50;

    let totalPrice = 0;

    switch (typeOfFlower){
        case "Roses":
            totalPrice = flowerQuantity*rosesPrice;
            if (flowerQuantity > 80){
                totalPrice = totalPrice*0.9;
            }
            break;
        case "Dahlias":
            totalPrice = flowerQuantity*dahliasPrice;
            if (flowerQuantity > 90){
                totalPrice = totalPrice*0.85;
            }
            break;
        case "Tulips":
            totalPrice = flowerQuantity*tulipsPrice;
            if (flowerQuantity > 80){
                totalPrice = totalPrice*0.85;
            }
            break;
        case "Narcissus":
            totalPrice = flowerQuantity*narcissusPrice;
            if (flowerQuantity < 120){
                totalPrice = totalPrice*1.15;
            }
            break;
        case "Gladiolus":
            totalPrice = flowerQuantity*gladiolusPrice;
            if (flowerQuantity < 80){
                totalPrice = totalPrice*1.2;
            }
    }
    if (totalBudget >= totalPrice){
        let moneyLeft = totalBudget - totalPrice;
        console.log(`Hey, you have a great garden with ${flowerQuantity} ${typeOfFlower} and ${moneyLeft.toFixed(2)} leva left.`);
    }
    else {
        let moneyNeeded = totalPrice - totalBudget;
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);
    }
}
budget(["Narcissus","119","360"])

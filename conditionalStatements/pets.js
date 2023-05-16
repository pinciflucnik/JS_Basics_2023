function food(arg){

    let daysGone = Number(arg[0]);

    let food = Number(arg[1]);

    let dogFood = Number(arg[2]);

    let catFood = Number(arg[3]);

    let tortoiseFood = Number(arg[4])/1000;

    let totalFoodNeeded =(dogFood + catFood + tortoiseFood) * daysGone;

    if (food >= totalFoodNeeded){

        let foodLeft = Math.floor(food - totalFoodNeeded);
        console.log(`${foodLeft} kilos of food left.`);

    }
    else {
        let foodNeeded = Math.ceil(totalFoodNeeded - food);
        console.log(`${foodNeeded} more kilos of food are needed.`);
    }
}
food(["5","10", "2.1", "0.8", "321"])
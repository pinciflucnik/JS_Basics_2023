function income(arg){
    let vegPrice = Number(arg[0]);
    let fruitPrice = Number(arg[1]);
    let totalVegies = Number(arg[2]);

    let totalFruit = Number(arg[3]);

    let totalVegiePrice = vegPrice * totalVegies;

    let totalFruitPrice =  fruitPrice * totalFruit;

    let totalPrice = ((totalFruitPrice + totalVegiePrice) / 1.94).toFixed(2);

    console.log(totalPrice);

}
income(["0.194", "19.4", "10", "10"])
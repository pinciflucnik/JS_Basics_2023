function club(input){
    let i = 0;

    let target = Number(input[i]);
    i++;
    let cocktail = input[i];
    i++;
    let count = Number(input[i]);
    i++;
    let totalIncome = 0;
    while (totalIncome < target){
        let cocktailPrice = cocktail.length;
        let orderPrice = cocktailPrice*count;
        if (orderPrice % 2 == 1){
            orderPrice = orderPrice * 0.75;
        }
        if (cocktail === "Party!"){
            let moneyNeeded = target - totalIncome;
            console.log(`We need ${moneyNeeded.toFixed(2)} leva more.`);
            break;
        }
        totalIncome = totalIncome + orderPrice;

        cocktail = input[i];
        i++;
        count = Number(input[i]);
        i++;
    }
    if (target <= totalIncome){
        console.log(`Target acquired.`);
    }
    console.log(`Club income - ${totalIncome.toFixed(2)} leva.`);
}
club(["100",
    "Sidecar",
    "7",
    "Mojito",
    "5",
    "White Russian",
    "10"])
function truckDriver(arg){

    let season = arg[0];
    let kmPerMonth = Number(arg[1]);
    let pricePerKilometer = 0;

    if (kmPerMonth <= 5000){
        if (season === "Spring" || season === "Autumn"){
            pricePerKilometer = 0.75;
        }
        else if (season === "Summer"){
            pricePerKilometer = 0.9;
        }
        else if (season === "Winter"){
            pricePerKilometer = 1.05;
        }
    }
    else if (kmPerMonth <=10000){
        if (season === "Spring" || season === "Autumn"){
            pricePerKilometer = 0.95;
        }
        else if (season === "Summer"){
            pricePerKilometer = 1.1;
        }
        else if (season === "Winter"){
            pricePerKilometer = 1.25;
        }
    }
    else if (kmPerMonth <= 20000){
        pricePerKilometer = 1.45;
    }
    let totalIncome = kmPerMonth*4*pricePerKilometer*0.9;
    console.log(totalIncome.toFixed(2));
}
truckDriver(["Winter", "16042"])
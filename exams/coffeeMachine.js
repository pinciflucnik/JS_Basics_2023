function coffeeMachine(arg){
    let drink = arg[0];
    let options = arg[1];
    let quantity = Number(arg[2]);

    let pricePerUnit = 0;


    if (drink === "Espresso"){
        if (options === "Without"){
            pricePerUnit = 0.9;
        }
        else if (options === "Normal"){
            pricePerUnit = 1;
        }
        else if ("Extra"){
            pricePerUnit = 1.2;
        }
    }
    else if (drink === "Cappuccino"){
        if (options === "Without"){
            pricePerUnit = 1;
        }
        else if (options === "Normal"){
            pricePerUnit = 1.2;
        }
        else if ("Extra"){
            pricePerUnit = 1.6;
        }
    }
    else if (drink === "Tea"){
        if (options === "Without"){
            pricePerUnit = 0.5;
        }
        else if (options === "Normal"){
            pricePerUnit = 0.6;
        }
        else if ("Extra"){
            pricePerUnit = 0.7;
        }
    }
    let totalPrice = pricePerUnit*quantity;
    if (options === "Without"){
        totalPrice = totalPrice*0.65;
    }
    if (drink === "Espresso" && quantity >= 5){
        totalPrice= totalPrice*0.75;
    }
    if (totalPrice > 15){
        totalPrice = totalPrice*0.8;
    }
    console.log(`You bought ${quantity} cups of ${drink} for ${totalPrice.toFixed(2)} lv.`);
}
coffeeMachine(["Tea", "Extra", "3"]);
function cofeeMachine(input){

    let type = input[0];
    let sugar = input[1];
    let count = Number(input[2]);
    let price = 0;
     switch (type){
        case "Espresso":
            switch (sugar){
                case "Without": price = 0.9*0.65;
                    break;
                case "Normal": price = 1;
                    break;
                case "Extra": price = 1.2;
                    break;
            }
            break;
         case "Cappuccino":
                switch (sugar){
                    case "Without": price = 1*0.65;
                        break;
                    case "Normal": price = 1.2;
                        break;
                    case "Extra": price = 1.6;
                        break;
                }
                break;
        case "Tea":
                    switch (sugar){
                        case "Without": price = 0.5*0.65;
                            break;
                        case "Normal": price = 0.6;
                            break;
                        case "Extra": price = 0.7;
                            break;
                    }
                    break;
     }
     let totalPrice = price*count;
     if (type === "Espresso" && count >= 5){
        totalPrice = totalPrice*0.75;
     }
     if (totalPrice > 15){
        totalPrice = totalPrice*0.8;
     }
     
     console.log(`You bought ${count} cups of ${type} for ${totalPrice.toFixed(2)} lv.`);
}
cofeeMachine(["Espresso",
    "Without",
    "10"])
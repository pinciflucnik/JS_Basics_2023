function travelAgency(input){
    let place = input[0];
    let type = input[1];
    let VIP = input[2];
    let nightsCount = Number(input[3]);
    let pricePerNight = 0;
    if (nightsCount <= 0){
        return console.log(`Days must be positive number!`);
    }
    if (nightsCount > 7){
        nightsCount = (nightsCount-1);
    }
    switch (place){
        case "Bansko":
        case "Borovets":
            switch (type){
                case "noEquipment": pricePerNight = 80;
                if (VIP === "yes"){
                    pricePerNight = pricePerNight*0.95;
                }

                    break;
                case "withEquipment": pricePerNight = 100;
                if (VIP === "yes"){
                    pricePerNight = pricePerNight*0.90;
                }

                    break;
                default: console.log(`Invalid input!`);
                return;
           }
           break;
        case "Varna":
        case "Burgas":
            switch (type){
                case "noBreakfast": pricePerNight = 100;
                if (VIP === "yes"){
                    pricePerNight = pricePerNight*0.93;
                }
                    break;
                case "withBreakfast": pricePerNight = 130;
                if (VIP === "yes"){
                    pricePerNight = pricePerNight*0.88;
                }

                    break;
                default: console.log(`Invalid input!`);
                return;

            }
            break;
            default: console.log(`Invalid input!`);
            return;

    }
    let totalPrice = pricePerNight*nightsCount;
    console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`);

}
travelAgency(["Bansko", "noEquipment", "yes", "8"])
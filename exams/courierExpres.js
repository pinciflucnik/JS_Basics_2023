function courierExpres(input){
    let weight = Number(input[0]);
    let serviceType = input[1];
    let distance = Number(input[2]);

    let pricePerKm = 0;

    if ( weight < 1){
        pricePerKm = 0.03;
    }
    else if (weight < 10){
        pricePerKm = 0.05;
    }
    else if (weight < 40){
        pricePerKm = 0.1;
    }
    else if (weight < 90){
        pricePerKm = 0.15;
    }
    else if (weight <= 150){
        pricePerKm = 0.20;
    }

    switch (serviceType){
        case "express":
            if ( weight < 1){
                pricePerKm = pricePerKm + ((pricePerKm*0.8)*weight);
            }
            else if (weight < 10){
                pricePerKm = pricePerKm + ((pricePerKm*0.4)*weight);
            }
            else if (weight < 40){
                pricePerKm = pricePerKm + ((pricePerKm*0.05)*weight);
            }
            else if (weight < 90){
                pricePerKm = pricePerKm + ((pricePerKm*0.02)*weight);
            }
            else if (weight <= 150){
                pricePerKm = pricePerKm + ((pricePerKm*0.01)*weight);
            }
                    break;
        
             
    }

    let totalPrice = pricePerKm * distance;
    

    console.log(`The delivery of your shipment with weight of ${weight.toFixed(3)} kg. would cost ${totalPrice.toFixed(2)} lv.`);



}
courierExpres(["87",
"express",
"130"])
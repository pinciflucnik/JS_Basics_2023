function journey(arg){

    let budget = Number(arg[0]);

    let season = arg[1];

    let destination;
    let placeToSleep;
    let totalPrice;

    if (budget <= 100){
        destination = "Bulgaria";
        if (season === "summer"){
            totalPrice = budget * 0.3;
        }
        else{
            totalPrice = budget *0.7;
        }
    }
    else if (budget <= 1000){
        destination = "Balkans";
        if (season === "summer"){
            totalPrice = budget * 0.4;
        }
        else {
            totalPrice = budget * 0.8;
        }
    }
    else {
        destination = "Europe";
        totalPrice = budget * 0.9;
    }
    if (destination === "Europe"){

        placeToSleep = "Hotel";
    }
    else {
        if (season === "summer"){
            placeToSleep = "Camp";
        }
        else {
            placeToSleep = "Hotel";
        }
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${placeToSleep} - ${totalPrice.toFixed(2)}`);
}

journey(["1500", "summer"])
function vacation(arg){
    let budget = Number(arg[0]);
    let season = arg[1];
    let location;
    let placeToSleep;
    let price;

    if (budget <= 1000){
        placeToSleep = "Camp";
        if (season === "Summer"){
            location = "Alaska";
            price = 0.65 * budget;
        }
        else {
            location = "Morocco";
            price = 0.45 * budget;
        }
    }
    else if (budget <= 3000){
        placeToSleep = "Hut";
        if (season === "Summer"){
            location = "Alaska";
            price = 0.8 * budget;
        }
        else {
            location = "Morocco";
            price = 0.6 * budget;
        }
    }
    else {
        placeToSleep = "Hotel";
        price = 0.9 * budget;
        if (season === "Summer"){
            location = "Alaska";
        }
        else {
            location = "Morocco";
        }
    }
    console.log(`${location} - ${placeToSleep} - ${price.toFixed(2)}`);
}
vacation(["2543.99", "Winter"])
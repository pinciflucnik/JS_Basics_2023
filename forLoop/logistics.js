function logistics(arg){
    let loadCount = Number(arg[0]);
    let totalPrice = 0;
    let bus = 0;
    let truck = 0;
    let train =0;
    let totalLoadWeght = 0;
    for (i = 1; i <= loadCount; i++){
        let loadWeight = Number(arg[i]);
        totalLoadWeght = totalLoadWeght + loadWeight
        if (loadWeight <= 3){
            totalPrice =totalPrice + loadWeight * 200;
            bus = bus + loadWeight;
        }
        else if (loadWeight <= 11){
            totalPrice =totalPrice + loadWeight * 175;
            truck = truck + loadWeight;
        }
        else {
            totalPrice =totalPrice + loadWeight * 120
            train = train + loadWeight;
        }
    }
    let averagePrice = totalPrice/totalLoadWeght;
    let busPercentage = bus/totalLoadWeght*100;
    let truckPercentage = truck/totalLoadWeght*100;
    let trainPercentage = train/totalLoadWeght*100;

    console.log(averagePrice.toFixed(2));
    console.log(`${busPercentage.toFixed(2)}%`);
    console.log(`${truckPercentage.toFixed(2)}%`);
    console.log(`${trainPercentage.toFixed(2)}%`);


}
logistics(["5"
    ,"2"
    ,"10"
    ,"20"
    ,"1", "7"])
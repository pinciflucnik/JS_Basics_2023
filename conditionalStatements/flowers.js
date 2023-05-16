function flowers(arg){
    let chrysanthemumsCount = Number(arg[0]);
    let rosesCount = Number(arg[1]);
    let tulipsCount = Number(arg[2]);
    let season = arg[3];
    let holliday = arg[4];
    let totalFlowerCount = chrysanthemumsCount + rosesCount + tulipsCount;
    let chrysanthemumsPrice = 0;
    let rosesPrice = 0;
    let tulipsPrice = 0;
    let discount = 1;

    
    if (season === "Spring" || season === "Summer"){
        chrysanthemumsPrice = 2;
        rosesPrice = 4.1;
        tulipsPrice = 2.5
        if (season === "Spring" && tulipsCount > 7){
            discount = 0.95
        }
    }
    else if (season === "Autumn" || season === "Winter"){
        chrysanthemumsPrice = 3.75;
        rosesPrice = 4.5;
        tulipsPrice = 4.15;
        if (season === "Winter" && rosesCount >= 10){
            discount = 0.9;
        }
    }
    let totalFlowersPrice = chrysanthemumsCount*chrysanthemumsPrice + rosesCount*rosesPrice + tulipsCount*tulipsPrice;

    if (holliday === "Y"){
        totalFlowersPrice = totalFlowersPrice*1.15;
    }
    let bouquetPrice =totalFlowersPrice*discount;


    if (totalFlowerCount > 20){
        bouquetPrice = bouquetPrice*0.8;
    }
    bouquetPrice = bouquetPrice +2;
    console.log(bouquetPrice.toFixed(2));
}
flowers(["10", "10", "10", "Autumn", "N"])
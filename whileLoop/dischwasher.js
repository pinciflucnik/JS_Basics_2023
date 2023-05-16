function dishwasher(input){
    let index = 0;
    let detergentBottles = Number(input[index]);
    index++;

    let detergentQuantity = detergentBottles*750;

    let dischesCount = input[index];
    index++;
    let counter = 1;
    let cleanDishes = 0;
    let cleanPots = 0;

    while (dischesCount !== "End") {
        dischesCount = Number(dischesCount);
        
        if (counter !== 3){
            detergentQuantity = detergentQuantity - (dischesCount*5);
            cleanDishes += dischesCount;
        }
        else{
            detergentQuantity = detergentQuantity - (dischesCount*15);
            cleanPots += dischesCount;
            counter = 0;
        }
        if (detergentQuantity < 0){
            console.log(`Not enough detergent, ${Math.abs(detergentQuantity)} ml. more necessary!`);
            break;
        }
        dischesCount = input[index];
        index++;
        counter++;
    }
    if (detergentQuantity >= 0){
        console.log(`Detergent was enough!`);
        console.log(`${cleanDishes} dishes and ${cleanPots} pots were washed.`);
        console.log(`Leftover detergent ${detergentQuantity} ml.`);

    }

}
dishwasher(["1", "10", "15", "10", "12", "13", "30"])
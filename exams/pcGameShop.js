function pcGameShop(input){
    let totalGameCount = Number(input[0]);
    let countHearthstone = 0;
    let countFornite = 0;
    let countOverwatch = 0;
    let countOthers = 0;
    for (i = 1; i <= totalGameCount; i++){
        let gameName = input[i];
        switch (gameName){
            case "Hearthstone":
                countHearthstone ++;
                break;
            case "Fornite":
                countFornite++;
                break;
            case "Overwatch":
                countOverwatch++;
                break;
            default:
                countOthers++;
                break;
        }
    }
    let percentHearthstone =countHearthstone/totalGameCount*100;
    let percentFornite =countFornite/totalGameCount*100;
    let percentOverwatch =countOverwatch/totalGameCount*100;
    let percentOthers = countOthers/totalGameCount*100;
    console.log(`Hearthstone - ${percentHearthstone.toFixed(2)}%`);
    console.log(`Fornite - ${percentFornite.toFixed(2)}%`);
    console.log(`Overwatch - ${percentOverwatch.toFixed(2)}%`);
    console.log(`Others - ${percentOthers.toFixed(2)}%`);
}
pcGameShop(["3",
    "Hearthstone",
    "Diablo 2",
    "Star Craft"])
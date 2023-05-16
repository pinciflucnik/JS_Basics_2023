function footballKit(input){
 let shirtPrice = Number(input[0]);
 let target = Number(input[1]);

 let shortsPrice = shirtPrice * 0.75;
 let socksPrice = shortsPrice * 0.20;
 let shoes = 2 * (shirtPrice + shortsPrice);

 let totalSpent = 0.85 * (shirtPrice + shortsPrice + socksPrice + shoes);

 if ( totalSpent >= target){
    console.log(`Yes, he will earn the world-cup replica ball!`);
    console.log(`His sum is ${totalSpent.toFixed(2)} lv.`);
 }
 else {
    let moneyNeeded = target - totalSpent;
    console.log(`No, he will not earn the world-cup replica ball.`);
    console.log(`He needs ${moneyNeeded.toFixed(2)} lv. more.`);
 }

}
footballKit(["55",
"310"])
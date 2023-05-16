function pcStore(input){
    let processorPrice = Number(input[0]);
    let videoCardPrice = Number(input[1]);
    let ramPrice = Number(input[2]);
    let ramCount = Number(input[3]);
    let discount = Number(input[4]);

    let totalPrice = ((processorPrice + videoCardPrice)*(1-discount) + (ramCount * ramPrice))*1.57;

    console.log(`Money needed - ${totalPrice.toFixed(2)} leva.`);


}
pcStore(["500",
"200",
"80",
"2",
"0.05"])
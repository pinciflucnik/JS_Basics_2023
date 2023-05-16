function trevichka(input){
    let yard = Number(input[0]);
    let price = yard * 7.61;
    let discount = price*0.18;
    let endPrice = price - discount;
    console.log(`The final price is: ${endPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`)
}
trevichka(["550"])
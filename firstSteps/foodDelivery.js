function price(input){
    let chicken = Number(input[0]) * 10.35;
    let fish = Number(input[1]) * 12.40;
    let vegies = Number(input[2]) * 8.15;
    let dessert = (chicken + fish + vegies) * 0.2;
    let endSum = chicken + fish + vegies + dessert + 2.50;
    console.log(endSum);

}
price(["2", "4", "3"])
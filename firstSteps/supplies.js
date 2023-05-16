function money(input){
    let pen = Number(input[0]);
    let markers = Number(input[1]);
    let detergent = Number(input[2]);
    let discount = Number(input[3])/100;
    let sum = (pen*5.80) + (markers*7.20) + (detergent*1.20);
    let endresult = sum - (sum*discount);
    console.log(endresult);
}
money(["2", "3", "4", "25"])
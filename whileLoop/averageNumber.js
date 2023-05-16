function averageNumber (input){
    let index = 0;
    let numCount = Number(input[index]);
    index++;
    let sum = 0;
    while (index <= numCount){
        let currentNum =Number(input[index]);
        index++;
        sum += currentNum; 
        
    }
    let averageNumber = sum/(index-1);
    console.log(averageNumber.toFixed(2));

}
averageNumber(["4","95","23","76","23"])
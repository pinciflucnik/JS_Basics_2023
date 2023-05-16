function computerFirm(input){
    let modelsCount = Number(input[0]);
    let sales = 0;
    let totalSales = 0;
    let ratingSum = 0;

    for (i = 1; i <= modelsCount; i++){
        let currentDigit = input[i];
        
        let rating = Number(currentDigit.charAt(currentDigit.length - 1));
        let predictedSales = Number(currentDigit.slice(0, -1));

        switch (rating){
            case 2: sales = predictedSales*0;
                break;
            case 3: sales = predictedSales * 0.5;
                break;
            case 4: sales = predictedSales * 0.7;
                break;
            case 5: sales = predictedSales * 0.85;
                break;
            case 6: sales = predictedSales;
                break;
        }
        totalSales += sales;
        ratingSum += rating;
    }
    let averageRating = ratingSum / modelsCount;

    console.log(totalSales.toFixed(2));
    console.log(averageRating.toFixed(2));

}
computerFirm(["5",
"122",
"156",
"202",
"214",
"185"])
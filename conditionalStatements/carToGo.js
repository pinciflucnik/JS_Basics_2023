function carToGo(arg){

    let budget = Number(arg[0]);
    let season = arg[1];
    let carClass;
    let carType;
    let carPrice = 0;

    if (budget <= 100){
        carClass = "Economy class"
        if (season === "Summer"){
            carType = "Cabrio"
            carPrice = 0.35 * budget
        }
        else {
            carType = "Jeep";
            carPrice = 0.65 * budget;
        }
    }
    else if (budget <=500){
        carClass = "Compact class"
        if (season === "Summer"){
            carType = "Cabrio"
            carPrice = 0.45 * budget
        }
        else {
            carType = "Jeep";
            carPrice = 0.8 * budget;
        }
    }
    else {
        carClass = "Luxury class";
        carType = "Jeep";
        carPrice = 0.9 * budget;
        }
        console.log(carClass);
        console.log(`${carType} - ${carPrice.toFixed(2)}`);
    
}
carToGo(["1010", "Winter"])
function tankOfFuel(arg){

    let typeOfFuel = arg[0];

    let fuelQuantity = Number(arg[1]);

    let clubCard = arg[2];

    let petrolPrice = 2.22;

    let diselPrice = 2.33;

    let gasPrice = 0.93;
    
    let totalPetrolprice = 0;

    let totalDiselPrice = 0;

    let totalGasprice = 0;

    if (clubCard === "Yes"){
        petrolPrice = petrolPrice - 0.18;
        diselPrice = diselPrice - 0.12;
        gasPrice = gasPrice - 0.08;
    }
    if (fuelQuantity >= 20 && fuelQuantity <= 25){
        totalDiselPrice = (diselPrice*fuelQuantity)*0.92;
        totalPetrolprice = (petrolPrice*fuelQuantity)*0.92;
        totalGasprice = (gasPrice*fuelQuantity)*0.92;
    }
    else if (fuelQuantity > 25){
        totalDiselPrice = (diselPrice*fuelQuantity)*0.9;     
        totalPetrolprice = (petrolPrice*fuelQuantity)*0.9;
        totalGasprice = (gasPrice*fuelQuantity)*0.9;
    }
    else {
        totalDiselPrice = (diselPrice*fuelQuantity);     
        totalPetrolprice = (petrolPrice*fuelQuantity);
        totalGasprice = (gasPrice*fuelQuantity);
    }
    if (typeOfFuel === "Gasoline"){
        console.log(`${totalPetrolprice.toFixed(2)} lv.`)
    }
    else if (typeOfFuel === "Diesel"){
        console.log(`${totalDiselPrice.toFixed(2)} lv.`)
    }
    else {
        console.log(`${totalGasprice.toFixed(2)} lv.`)
    }
}
tankOfFuel(["Diesel", "19", "No"])
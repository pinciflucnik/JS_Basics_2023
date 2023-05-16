function refuel(arg){

    let typeOfFuel = arg[0];

    let litres = Number(arg[1]);

    switch (typeOfFuel){

        case "Diesel":
        case "Gasoline":
        case "Gas":
            if (litres >= 25){
                switch (typeOfFuel){
                    case "Diesel":
                        typeOfFuel = "diesel";
                        break;
                    case "Gasoline":
                            typeOfFuel = "gasoline"
                            break;
                    case "Gas":
                        typeOfFuel = "gas";
                        break;    
                }
                console.log(`You have enough ${typeOfFuel}.`);
            
            }
            else {
                switch (typeOfFuel){
                    case "Diesel":
                        typeOfFuel = "diesel";
                        break;
                    case "Gasoline":
                            typeOfFuel = "gasoline"
                            break;
                    case "Gas":
                        typeOfFuel = "gas";
                        break;    
                }
                console.log(`Fill your tank with ${typeOfFuel}!`)
            }
            break;
        default :
            console.log("Invalid fuel!");
    }
}
refuel(["Gasoline", "30"])
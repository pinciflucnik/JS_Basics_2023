function fruitShop(arg){

    let fruit = arg[0];

    let day = arg[1];

    let quantity = arg[2];

    switch (day){

        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch (fruit){
                case "banana":
                    console.log((quantity*2.50).toFixed(2));
                    break;
                case "apple":
                    console.log((quantity*1.2).toFixed(2));
                    break;
                case "orange":
                    console.log((quantity*0.85).toFixed(2));
                    break;
                case "grapefruit":
                    console.log((quantity*1.45).toFixed(2));
                    break;
                case "kiwi":
                    console.log((quantity*2.7).toFixed(2));
                    break;
                case "pineapple":
                    console.log((quantity*5.5).toFixed(2));
                    break;
                case "grapes":
                    console.log((quantity*3.85).toFixed(2));
                    break;
                default :
                    console.log("error");
            }
            break;

            case "Saturday":
            case "Sunday":
                switch (fruit){

                    case "banana":
                        console.log((quantity*2.70).toFixed(2));
                        break;
                    case "apple":
                        console.log((quantity*1.25).toFixed(2));
                        break;
                    case "orange":
                        console.log((quantity*0.9).toFixed(2));
                        break;
                    case "grapefruit":
                        console.log((quantity*1.60).toFixed(2));
                        break;
                    case "kiwi":
                        console.log((quantity*3).toFixed(2));
                        break;
                    case "pineapple":
                        console.log((quantity*5.6).toFixed(2));
                        break;
                    case "grapes":
                        console.log((quantity*4.2).toFixed(2));
                        break;
                    default :
                        console.log("error");
                }
                break;
                default :
                    console.log("error");
    }
}
fruitShop(["kiw","Monday","2.5"])
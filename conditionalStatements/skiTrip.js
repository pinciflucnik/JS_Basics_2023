function skiTrip(arg){
    let days = Number(arg[0]);
    let type = arg[1];
    let feedback = arg[2];
    let nights = days -1;
    let nightPrice = 0;
    let totalPrice = 0;

    switch (type){
        case "room for one person":
            nightPrice = 18;
            break;
        case "apartment":
            nightPrice = 25;
            break;
        case "president apartment":
            nightPrice = 35;
            break;
    }
    if (days < 10){
        if (type === "apartment"){
            totalPrice = nightPrice*nights*0.7;
        }
        else if (type === "president apartment"){
            totalPrice = nightPrice*nights*0.9;
        }
        else{
            totalPrice= nightPrice*nights;
        }
    }
    else if (days <= 15){
        if (type === "apartment"){
            totalPrice = nightPrice*nights*0.65;
        }
        else if (type === "president apartment"){
            totalPrice = nightPrice*nights*0.85;
        }
        else{
            totalPrice= nightPrice*nights;
        }
    }
    else {
        if (type === "apartment"){
            totalPrice = nightPrice*nights*0.5;
        }
        else if (type === "president apartment"){
            totalPrice = nightPrice*nights*0.8;
        }
        else{
            totalPrice= nightPrice*nights;
        }
    }
    if (feedback === "positive"){
        totalPrice = totalPrice*1.25;
    }
    else if (feedback === "negative"){
        totalPrice = totalPrice*0.9;
    }
    console.log(totalPrice.toFixed(2));
}
skiTrip(["2",
"apartment",
"positive"])
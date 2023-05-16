function hotelRoom(arg){

    let month = arg[0];

    let nights = Number(arg[1]);

    let studioPricePerNight = 0;    
    let apartmentPricePerNight = 0;
    if (month === "May" || month === "October"){
        studioPricePerNight = 50;
        apartmentPricePerNight = 65;
        if (nights > 7 && nights <= 14){
            studioPricePerNight = studioPricePerNight * 0.95;
        }
        else if (nights > 14){
            studioPricePerNight = studioPricePerNight * 0.7;
        }
    }
    else if (month === "June" || month === "September"){
        studioPricePerNight = 75.2;
        apartmentPricePerNight = 68.7;
        if (nights > 14){
            studioPricePerNight = studioPricePerNight * 0.8;
        }
        
    }
    else if (month === "July" || month === "August"){
        studioPricePerNight = 76;
        apartmentPricePerNight = 77;
    }
    if (nights > 14){
        apartmentPricePerNight = apartmentPricePerNight * 0.9;
    }
    console.log(`Apartment: ${(apartmentPricePerNight*nights).toFixed(2)} lv.`);
    console.log(`Studio: ${(studioPricePerNight*nights).toFixed(2)} lv.`);
}
hotelRoom(["August",
"20"])
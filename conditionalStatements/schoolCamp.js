function schoolCamp(arg){
    let season = arg[0];
    let groupType = arg[1];
    let studentsCount = Number(arg[2]);
    let nightsCount = Number(arg[3]);
    let pricePerNight = 0;
    let sport;

    if (season === "Winter"){
        if (groupType === "boys" || groupType === "girls"){
            pricePerNight = 9.6;
        }
        else {
            pricePerNight = 10;
        }
        if (groupType === "girls"){
            sport = "Gymnastics";
        }
        else if (groupType === "boys"){
            sport = "Judo"
        }
        else {
            sport = "Ski"
        }
    } 
    else if(season === "Spring"){
        if (groupType === "boys" || groupType === "girls"){
            pricePerNight = 7.2;
        }
        else {
            pricePerNight = 9.5;
        }
        if (groupType === "girls"){
            sport = "Athletics";
        }
        else if (groupType === "boys"){
            sport = "Tennis"
        }
        else {
            sport = "Cycling"
        }
    }
    else if (season === "Summer"){
        if (groupType === "boys" || groupType === "girls"){
            pricePerNight = 15;
        }
        else {
            pricePerNight = 20;
        }
        if (groupType === "girls"){
            sport = "Volleyball";
        }
        else if (groupType === "boys"){
            sport = "Football"
        }
        else {
            sport = "Swimming"
        }
    }
    if (studentsCount >= 10 && studentsCount < 20){
        pricePerNight = pricePerNight*0.95;
    }
    else if (studentsCount >= 20 && studentsCount < 50){
        pricePerNight = pricePerNight*0.85;
    }
    else if (studentsCount >= 50){
        pricePerNight = pricePerNight * 0.5;
    }
   let totalPrice = nightsCount*pricePerNight*studentsCount;
   console.log(`${sport} ${totalPrice.toFixed(2)} lv.`);
}
schoolCamp(["Winter","mixed","9","15"]);
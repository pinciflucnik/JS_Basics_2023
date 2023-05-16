function trekkingMania(arg){
    let groupCount = Number(arg[0]);
    let musala = 0;
    let montblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    for (i = 1; i <= groupCount; i++){
        let peopleCount = Number(arg[i]);
        if (peopleCount <= 5){
            musala = musala +peopleCount;
        }
        else if (peopleCount <= 12){
            montblan = montblan + peopleCount;
        }
        else if (peopleCount <= 25){

            kilimanjaro = kilimanjaro + peopleCount;
        }
        else if (peopleCount <= 40){
            k2 = k2 + peopleCount;
        }
        else {
            everest = everest + peopleCount;
        }
    }
    let totalPeople = musala + montblan + kilimanjaro + k2 + everest;
    console.log((musala/totalPeople*100).toFixed(2) + "%");
    console.log((montblan/totalPeople*100).toFixed(2) + "%");
    console.log((kilimanjaro/totalPeople*100).toFixed(2) + "%");
    console.log((k2/totalPeople*100).toFixed(2) + "%");
    console.log((everest/totalPeople*100).toFixed(2) + "%");


}
trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])
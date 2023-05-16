function futballLeague (input){
    let capacity = Number(input[0]);
    let fansCount = Number(input[1]);
    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;

    // if (fansCount > capacity){
    //     return; console.log(`To many fans. Not enough space to fit them`);
    // }

    for (i = 2; i <= fansCount +1; i++ ){
        let sector = input[i];
        switch (sector){
            case "A":
            case "a": sectorA ++;
                break;
            case "B":
            case "b": sectorB ++;
                break;
            case "V":
            case "v": sectorV ++;
                break;
            case "G":
            case "g": sectorG ++;
                break;

        }
    }
    let sectorApercent = sectorA/fansCount*100;
    let sectorBpercent = sectorB/fansCount*100;
    let sectorVpercent = sectorV/fansCount*100;
    let sectorGpercent = sectorG/fansCount*100;
    let capacityPercent = fansCount/capacity*100;
    
    console.log(sectorApercent.toFixed(2)+"%");
    console.log(sectorBpercent.toFixed(2)+"%");
    console.log(sectorVpercent.toFixed(2)+"%");
    console.log(sectorGpercent.toFixed(2)+"%");
    console.log(capacityPercent.toFixed(2)+"%");

}
futballLeague(["76", "8", "A", "A","B","B","V","V", "G", "G"])
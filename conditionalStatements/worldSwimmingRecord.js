function isItRecord(arg){

    let currentRecord = Number(arg[0]);

    let distance = Number(arg[1]);

    let meterTime = Number(arg[2]);

    let hisTime = (distance * meterTime);
    
    let tired = Math.floor((distance / 15));
     
    tired = (tired * 12.5);

    hisTime = hisTime + tired;

    if (hisTime < currentRecord){

        hisTime = hisTime.toFixed(2);

        console.log(`Yes, he succeeded! The new world record is ${hisTime} seconds.`);
    }

    else {
        let hisRecord = ((currentRecord - hisTime)*-1).toFixed(2);

        console.log(`No, he failed! He was ${hisRecord} seconds slower.`);
    }
}
isItRecord(["55555.67","3017","5.03"]);
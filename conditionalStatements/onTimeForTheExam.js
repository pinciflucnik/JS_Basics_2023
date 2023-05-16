function onTime(arg){

    let examHour = Number(arg[0]);
    let examMinute = Number(arg[1]);
    let arrivalHour = Number(arg[2]);
    let arrivalMinute = Number(arg[3]);

    let examTimeInMinutes = examHour*60 + examMinute;
    let arrivalTimeInMinutes = arrivalHour*60 + arrivalMinute;
    let minutesEarly = arrivalTimeInMinutes - examTimeInMinutes;

    if (arrivalTimeInMinutes > examTimeInMinutes){
        console.log("Late");
        if (arrivalTimeInMinutes < examTimeInMinutes + 60){
            console.log(`${minutesEarly} minutes after the start`);
        }
        else {
            let hoursLate = Math.floor((arrivalTimeInMinutes - examTimeInMinutes)/60);
            let minutesLate = (arrivalTimeInMinutes-examTimeInMinutes) % 60;
            if (minutesLate < 10){
                console.log(`${hoursLate}:0${minutesLate} hours after the start`);
            }
            else {
                console.log(`${hoursLate}:${minutesLate} hours after the start`);
            }
        }

    }
    else if (arrivalTimeInMinutes < examTimeInMinutes -30 ){
        console.log("Early");
        if (arrivalTimeInMinutes > examTimeInMinutes - 60){
            console.log(`${minutesEarly*-1} minutes before the start`);
        }
        else {
            let hoursEarly = Math.floor((examTimeInMinutes - arrivalTimeInMinutes)/60);
            let minutesEarly2 = (examTimeInMinutes - arrivalTimeInMinutes) % 60;
            if (minutesEarly2 < 10){
                console.log(`${hoursEarly}:0${minutesEarly2} hours before the start`);
            }
            else {
                console.log(`${hoursEarly}:${minutesEarly2} hours before the start`);
            }
        }
    }
   
    else if (arrivalTimeInMinutes >= examTimeInMinutes -30){
         console.log("On time");
         if (arrivalTimeInMinutes !== examTimeInMinutes){
            console.log(`${minutesEarly*-1} minutes before the start`);
         } 
        
    }
}
onTime(["9",
"00",
"8",
"30"])
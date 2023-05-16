function sleepyTomCat(arg){

    let daysOff = Number(arg[0]);

    let normOfPlay = 30000;

    let workDaysPlay = (365-daysOff)*63;

    let offDaysPlay = daysOff*127;

    let totalPlay = workDaysPlay + offDaysPlay;

    if (totalPlay > normOfPlay){

        let difference = totalPlay - normOfPlay;
        console.log("Tom will run away");
        let hours = Math.floor(difference/60);
        let minutes = difference % 60;
        console.log(`${hours} hours and ${minutes} minutes more for play`);
    }
    else if (normOfPlay > totalPlay){

        let difference = normOfPlay - totalPlay;
        console.log("Tom sleeps well");
        let hours = Math.floor(difference/60);
        let minutes = difference % 60;
        console.log(`${hours} hours and ${minutes} minutes less for play`);
    }
}
sleepyTomCat([20]);
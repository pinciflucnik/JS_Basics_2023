function timeToWatch(arg){

    let showName = arg[0];

    let episodeDuration = Number(arg[1]);

    let breakDuration = Number(arg[2]);

    let lunchTime = breakDuration * 1/8;

    let restTime = breakDuration * 1/4;

    let totalTimeNeeded = lunchTime + restTime + episodeDuration;

    if (totalTimeNeeded <= breakDuration){

        let freeTime = Math.ceil(breakDuration - totalTimeNeeded);

        console.log(`You have enough time to watch ${showName} and left with ${freeTime} minutes free time.`);
    }
    else {

        let timeNeeded = Math.ceil(totalTimeNeeded - breakDuration);

        console.log("You don't "+`have enough time to watch ${showName}, you need ${timeNeeded} more minutes.`)
    }
}  
timeToWatch(["Teen Wolf","48","60"])

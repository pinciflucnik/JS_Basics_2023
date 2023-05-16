function walking(input){
    let i = 0;
    let goal = 10000;
    while (i<= input.length){
        let steps = input[i];
        if (steps != "Going home"){
            steps = Number(steps);
            goal -= steps;
            if (goal <=0){
                console.log(`Goal reached! Good job!`);
                console.log(`${-1*goal} steps over the goal!`);
                break;
            }
        }
        else {
            steps = Number(input[i+1]);
            goal -= steps;
            if (goal <=0){
                console.log(`Goal reached! Good job!`);
                console.log(`${-1*goal} steps over the goal!`);
                break;

            }
            else {
                console.log(`${goal} more steps to reach goal.`);
                break;
            }

        }
        i++;
    }

}
walking(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])
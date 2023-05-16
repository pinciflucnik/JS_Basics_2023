function workingHours(arg){

    let time = Number(arg[0]);

    let day = arg[1];

    switch (day){

        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
        case "Saturday":
            if (time >= 10 && time <= 18){

                console.log("open");

            }
            else{
                console.log("closed");
            }
            break;
        case "Sunday":
            console.log("closed");

    }
}
workingHours(["11","Sunday"])
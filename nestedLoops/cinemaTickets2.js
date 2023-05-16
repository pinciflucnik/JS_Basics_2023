function cinemaTickets(input){
    let index = 0;
    let command = input[index];
    index++;
    let isFinished = false;
    let studentCount = 0;
    let standartCount = 0;
    let kidCount = 0;
    while (command !== "Finish"){
        if (isFinished){
            break;
        }
        let name = command;
        let emptySeats = Number(input[index]);
        index ++;
        let ticketType = input[index];
        index++;
        let seatsTaken = 0;

        while (ticketType !== "End"){
            if (ticketType === "Finish"){
                isFinished = true;
                break;
            }
            seatsTaken++;
            switch (ticketType){
                case "student": studentCount++;
                    break;
                case "standard": standartCount++;
                    break;
                case "kid": kidCount++;
            }
            if (seatsTaken === emptySeats){
                break;
            }
            ticketType = input[index];
            index++;
        }
        let percentFull = (seatsTaken / emptySeats) * 100;

        console.log(`${name} - ${percentFull.toFixed(2)}% full.`);



        command = input[index];
        index++;
    }
    let totalTickets = studentCount + standartCount + kidCount;

    console.log(`Total tickets: ${totalTickets}`);

    let studentPercent = (studentCount / totalTickets) * 100;
    let standartPercent = (standartCount / totalTickets) * 100;
    let kidPercent = (kidCount / totalTickets) * 100;

    console.log(`${studentPercent.toFixed(2)}% student tickets.`);
    console.log(`${standartPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidPercent.toFixed(2)}% kids tickets.`);
    

}
cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])
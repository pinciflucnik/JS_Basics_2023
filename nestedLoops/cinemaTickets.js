function cinemaTickets(input){
    index = 0;
    let command = input[index];
    index++;
    let studentCount = 0;
    let standartCount = 0;
    let kidCount = 0;
    let isFinish = false;
    let scopeCommand2 = "";


    while (index !== "Finish"){
        let movieName = command;
        let emptySeats = Number(input[index]);
        index++;
        let command2 = input[index];
        index++;
        let totalTicketCount = 0;


            for (i = emptySeats; i > 0; i--){
                if (command2 === "End" || command2 === "Finish"){
                    if (command2 === "Finish"){
                        isFinish = true;
                    }
                    break;
                }
                while (command2 !== "End"){
                let ticketType = command2;
                if (command2 === "Finish"){
                    break;
                }
                totalTicketCount ++;
                switch (ticketType){
                    case "student": studentCount ++;
                        break;
                    case "standard": standartCount ++;
                        break;
                    case "kid": kidCount ++;
                        break;
                }
                command2 = input[index];
                index++;
                scopeCommand2 = command2;

                }
            }
        let percentFull = totalTicketCount/emptySeats*100;
        console.log(`${movieName} - ${percentFull.toFixed(2)}% full.`);
        if (isFinish){
            break;
        }


        command = input[index];
        index++;
    }
    if (scopeCommand2 === "Finish" || command === "Finish" ){
        let allTickets = studentCount + kidCount + standartCount;
        console.log(`Total tickets: ${allTickets}`);
        console.log(`${((studentCount/allTickets)*100).toFixed(2)}% student tickets.`);
        console.log(`${((standartCount/allTickets)*100).toFixed(2)}% standard tickets.`);
        console.log(`${((kidCount/allTickets)*100).toFixed(2)}% kids tickets.`);


    }


}
cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])
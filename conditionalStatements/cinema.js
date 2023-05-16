function ticketIncome(arg){

    let type = arg[0];
    let rows = Number(arg[1]);
    let columns = Number(arg[2]);
    let ticketPrice;


    if (type === "Premiere"){
        ticketPrice = 12;
    }
    else if (type === "Normal"){
        ticketPrice = 7.5;
    }
    else if (type === "Discount"){
        ticketPrice = 5;
    }

    let totalTicketPrice = (ticketPrice*(rows*columns)).toFixed(2);

    console.log(`${totalTicketPrice} leva`);

}
ticketIncome(["Discount","12","30"])
function matchTickets(arg){

    let budget = Number(arg[0]);

    let type = arg[1];
    
    let numberOfPeople = Number(arg[2]);

    let ticketPrice = 0;
    let tripPrice = 0;
    let totalTicketPrice = 0;

    if (type === "VIP"){
        ticketPrice = 499.99;
        totalTicketPrice = numberOfPeople*ticketPrice; 
    }
    else if (type === "Normal"){
        ticketPrice = 249.99;
        totalTicketPrice = numberOfPeople*ticketPrice; 
    }
    if (numberOfPeople <= 4){
        tripPrice = 0.75*budget;
    }
    else if (numberOfPeople <=9){
        tripPrice = 0.6*budget;
    }
    else if (numberOfPeople <=24){
        tripPrice = 0.5*budget;
    }
    else if (numberOfPeople <= 49){
        tripPrice = 0.4*budget;
    }
    else {
        tripPrice = 0.25*budget;
    }
    if (budget >= (totalTicketPrice+tripPrice)){
        let moneyLeft = budget - (totalTicketPrice + tripPrice);
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    }
    else {
        let moneyNeeded = (totalTicketPrice+tripPrice)- budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
    }
}
matchTickets(["30000", "VIP", "49"])
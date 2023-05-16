function familyTrip(arg){

   let budget = Number(arg[0]);
   let nights = Number(arg[1]);
   let pricePerNight = Number(arg[2]);
   let extraExpences = Number(arg[3])/100 * budget;


   if (nights > 7 ){

    pricePerNight = pricePerNight * 0.95;
   } 

   let totalExpence = pricePerNight*nights + extraExpences;

   if (budget >= totalExpence){
    let moneyLeft = budget - totalExpence;
    console.log(`Ivanovi will be left with ${moneyLeft.toFixed(2)} leva after vacation.`);
   }
   else {
    let moneyNeede = totalExpence - budget;
    console.log(`${moneyNeede.toFixed(2)} leva needed.`);
   }
}
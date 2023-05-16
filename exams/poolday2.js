function poolday(input){
    let peopleCount = Number(input[0]);
    let entryFee = Number(input[1]);
    let bed = Number(input[2]);
    let shade = Number(input[3]);
    let totalEntryFee = peopleCount * entryFee;
    let totalShade = Math.ceil(peopleCount/2)*shade;
    let totalBed = Math.ceil(peopleCount*0.75)*bed;
    let totalExpence = totalEntryFee + totalBed + totalShade;

    console.log(`${totalExpence.toFixed(2)} lv.`);
}
poolday(["21", "5.50", "4.40", "6.20"])
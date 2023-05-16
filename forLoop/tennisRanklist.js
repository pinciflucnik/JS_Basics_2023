function raknlist(arg){
 let tournamentCount = Number(arg[0]);
 let startPoints = Number(arg[1]);
 let totalPoints = startPoints;
 let averagePoints = 0;
 let percentWon = 0;
 let wonTournaments = 0;
 for (i = 2; i <= tournamentCount +2; i++){
    let finalPosition = arg[i];
    
    switch (finalPosition){
        case "W": totalPoints = totalPoints + 2000;
        wonTournaments = wonTournaments +1;
            break;
        case "F": totalPoints = totalPoints + 1200;
            break;
        case "SF": totalPoints = totalPoints + 720;
            break;

    }
    

 }
    percentWon = wonTournaments/tournamentCount*100;
    averagePoints = (totalPoints-startPoints)/tournamentCount;
    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${percentWon.toFixed(2)}%`);
}
raknlist(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])
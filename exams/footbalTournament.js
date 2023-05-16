function footballTournament(input){
    let name = input[0];
    let gamesCount = Number(input[1]);
    let points = 0;
    let gamesWon = 0;
    let gamesDrawn = 0;
    let gamesLost = 0;

    for (i = 2; i <= gamesCount + 1; i++){
        let result = input[i];
        switch (result){
            case "W": points += 3;
            gamesWon ++;
                break;
            case "D": points += 1;
                gamesDrawn ++;
                break;
            case "L": gamesLost++;
                break;
        }

    }
    if (gamesCount === 0){
        console.log(`${name} hasn't played any games during this season.`);
    }
    else {
        let percentWon = gamesWon/gamesCount*100;
        console.log(`${name} has won ${points} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${gamesWon}`);
        console.log(`## D: ${gamesDrawn}`);
        console.log(`## L: ${gamesLost}`);
        console.log(`Win rate: ${percentWon.toFixed(2)}%`);
    }
}
footballTournament(["Liverpool", "10", "W", "D", "D", "W", "L", "W", "D", "D", "W", "W"])
function cake(input){
    let sideA = Number(input[0]);
    let sideB = Number(input[1]);
    let i = 2;
    let totalPieces = sideA*sideB;
    while (i <= input.length + 2){
        let takenPieces = input[i];
        if (takenPieces != "STOP"){
            takenPieces = Number(takenPieces);
            totalPieces -= takenPieces;
            if (totalPieces < 0){
                console.log(`No more cake left! You need ${-1*totalPieces} pieces more.`); break;
            }
        }
        else {
            if (totalPieces < 0){
                console.log(`No more cake left! You need ${-1*totalPieces} pieces more.`); break;

            }
            else {
                console.log(`${totalPieces} pieces are left.`);
            }
        }
        i++;
    }
}
cake(["10",
"2",
"10",
"4",
"6",
"STOP"])
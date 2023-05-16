function moving(input){
    let widht = Number(input[0]);
    let lengTH = Number(input[1]);
    let height = Number(input[2]);
    let i = 3;
    let totalSpace = widht*lengTH*height;

    while ( i <= input.length + 3){
        let boxes = input[i];
        if (boxes != "Done"){
            totalSpace -= boxes;
            if (totalSpace < 0){
                console.log(`No more free space! You need ${-1*totalSpace} Cubic meters more.`);
                break;
            }
        }
        else {
            if (totalSpace < 0){
                console.log(`No more free space! You need ${-1*totalSpace} Cubic meters more.`);
                break;

            }
            else {
                 console.log(`${totalSpace} Cubic meters left.`);
            }
        }
        i++;
    }


}
moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])
function renovation(input){
    let i = 0;
    let height = Number(input[i]);
    i++;
    let widht = Number(input[i]);
    i++;
    let windowsNdoors = Number(input[i]);
    i++;
    let areaToPaint = 4*(height*widht)*(1-(windowsNdoors/100));
    areaToPaint = Math.ceil(areaToPaint);
    let command = input[i];
    i++;
    let totalPaint = 0;
    while (command !== "Tired!"){
        let paint = Number(command);
         totalPaint += paint;
         if (areaToPaint == totalPaint){
            console.log(`All walls are painted! Great job, Pesho!`);
            break;
         }
         else if (areaToPaint < totalPaint){
            let paintLeft = totalPaint - areaToPaint;
            console.log(`All walls are painted and you have ${paintLeft} l paint left!`);
            break;
         }
        command = input[i];
        i++;
    }
    if (command === "Tired!"){
        let paintNeeded = areaToPaint - totalPaint;
        console.log(`${paintNeeded} quadratic m left.`);
    }


}
renovation(["2",
    "3",
    "25",
    "6",
    "7",
    "8"])
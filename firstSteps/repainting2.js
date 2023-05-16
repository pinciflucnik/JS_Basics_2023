function paint(arg){

    let height = Number(arg[0]);

    let lenght = Number(arg[1]);

    let triangleH = Number(arg[2]);

    let smallSides = 2*(height*height) - (1.2*2);

    let bigSides = 2*(height*lenght) - 2*(1.5*1.5);

    let roofArea = 2*(height*lenght) + 2*(height*triangleH/2);

    let houseArea = smallSides + bigSides;

    let greenPaint = ((houseArea/3.4)).toFixed(2);
    
    let redPaint = ((roofArea/4.3)).toFixed(2);

    console.log(greenPaint);
    console.log(redPaint);
}
paint(["6", "10", "5.2"])
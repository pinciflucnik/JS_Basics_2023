function circle(arg){

    let radius = Number(arg[0]);

    let area = (radius*radius*Math.PI).toFixed(2);

    let parameter = (2*radius*Math.PI).toFixed(2);

    console.log(area);
    console.log(parameter);
}
circle(["4.5"])
function areaOfTriangle(input){
    let side = Number(input[0]);
    let height = Number(input[1]);
    let area = ((side * height) / 2).toFixed(2);
    console.log(area)
}
    areaOfTriangle(["20", "30"])
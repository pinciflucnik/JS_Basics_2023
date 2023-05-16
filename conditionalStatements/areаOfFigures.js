function areaCalc(input){
    let type = input[0];
    if (type == "square"){
        let side = Number(input[1]);
        console.log((side * side).toFixed(3));
    }
        else {
            if (type == "rectangle"){
                let side1 = Number(input[1]);
                let side2 = Number(input[2]);
                console.log((side1 * side2).toFixed(3));
            }
                else {
                    if (type == "circle"){
                        let radius = Number(input[1]);
                        console.log((Math.PI  * (radius * radius)).toFixed(3));
                    }
                    else {
                        if (type == "triangle"){
                            let side3 = Number(input[1]);
                            let height = Number(input[2]);
                            console.log(((side3 * height)/2).toFixed(3));
                        }
                        else {
                            console.log("Not a valid figure!")
                        }
                    }
                }
            }
        }
areaCalc(["triangle", "4.5", "20"])
function weather(input){

    let degrees = Number(input[0]);

    if (degrees >= 5 && degrees <= 35) {

        if (degrees <= 11.9) {
            console.log("Cold");
        }
        else {
            if (degrees <= 14.9) {
                console.log("Cool");
            }
            else {
                if (degrees <= 20) {
                    console.log("Mild");
                }
                else {
                    if (degrees <= 25.9) {
                        console.log("Warm");
                    }
                    else {
                        if (degrees <= 35) {
                            console.log("Hot")
                        }
                    }
                }
            }
        }
    }
    else {
        console.log("unknown");
    }
}
weather(["36"])
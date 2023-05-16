function numberInRange(arg){

    let a = Number(arg[0]);

    if (a >= -100 && a <= 100){

            if (a == 0){
            console.log("No");
            }
            else {
                console.log("Yes")
            }
        
    }
    else {
        console.log("No");
    }
}
numberInRange(["-101"])
function personalTitle(arg){

    let age = Number(arg[0]);
    let sex = arg[1];

    if (age < 16){

        switch (sex){
            case "m":
                console.log("Master");
                break;
            case "f":
                console.log("Miss");
                break;
        }
    }
    else {

        switch (sex){

            case "m":
                console.log("Mr.");
                break;
            case "f":
                console.log("Ms.");
                break;
        }
    }
}
personalTitle(["13.5","m"])
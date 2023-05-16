function doorLock(input){

    let hundredsUpperLimit = Number(input[0]);
    let tenthsUpperLimit = Number(input[1]);
    let singlesUpperLimit = Number(input[2]);

    for (a = 1; a <= hundredsUpperLimit; a++){
        for (b = 1; b <= tenthsUpperLimit; b++){
            for (c = 1; c <= singlesUpperLimit; c++){
                if (c%2===0 && a%2===0){
                    switch (b){
                        case 2:
                        case 3:
                        case 5:
                        case 7: let combination = "" + a + " " + b + " " + c + " "
                        console.log(combination);
                            break;
                            
                    }
                }
            }
        }
    }
}
doorLock(["3", "5", "5"])
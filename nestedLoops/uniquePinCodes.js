function PINcode(input){
    let fisrtUpperLimit = Number(input[0]);
    let secondUpperLimit = Number(input[1]);
    let thirdUpperLimit = Number(input[2]);
    let validFirst = 0;
    let validSecond = 0;
    let validThird = 0;
    for (a = 1; a <= fisrtUpperLimit; a++){
        if (a % 2 === 0){
            for (b = 1; b<=secondUpperLimit; b++){
                switch (b){
                    case 2:
                    case 3:
                    case 5:
                    case 7: 
                    for (c = 1; c <= thirdUpperLimit; c++){
                        if (c % 2 === 0){
                            console.log(a+" "+b+" "+c+" ");
                        }
                    }
                        break;
                }
            }
        }
    }
}
PINcode(["8", "2", "8"])
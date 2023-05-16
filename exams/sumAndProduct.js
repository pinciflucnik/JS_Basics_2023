function sumAndProduct(input){
    let n = Number(input[0]);
    let done = false;

    for ( a = 1; a <= 9; a++){
        for (b = 9; b >= a; b--){
            for (c = 0; c <= 9; c++){
                for (d = 9; d >= c; d--){
                    let sum = a + b + c + d;
                    let multiplied = a * b * c * d;
                    if (sum === multiplied && n % 10 == 5){
                        console.log(a*1000 + b*100 + c*10 + d);
                        done = true;
                        break;
                    }
                    let divided = (a * b * c * d)/(a + b + c + d);
                    let toFloored = Math.floor(divided);
                    if (toFloored === 3 && n % 3 == 0){
                        console.log(d*1000 + c*100 + b*10 + a);
                        done = true;
                        break;

                    }
                }
                if (done){
                    break;
                }
            }
            if (done){
                break;
            }
  

        }
        if (done){
            break;
        }
    }
    if (done === false){
        console.log(`Nothing found`);
    }



}
sumAndProduct(["214"])
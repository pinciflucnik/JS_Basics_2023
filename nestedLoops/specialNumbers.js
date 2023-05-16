function specialNumbers(input){
    let n = Number(input[0]);
    let buff = "";
    for (i = 1111; i <= 9999; i++){
        let isFound = true;
        i = String(i);
        for (m = 0; m < i.length; m++){
            let currentNum = Number(i.charAt(m));
            if (n % currentNum !== 0){
                isFound = false;
                break;
            }

        }
        if (isFound){
            buff = buff + i + " ";
        }
    }
    console.log(buff);
}
specialNumbers(["16"])
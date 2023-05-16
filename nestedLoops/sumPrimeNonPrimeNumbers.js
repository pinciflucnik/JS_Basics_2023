function sumPrimeNonPrime(input){

    let index = 0;
    let command = input[index];
    index++;
    let sumPrime = 0;
    let sumNonPrime = 0;
        while(command !== "stop"){
            let currentNum = Number(command);
            let isPrime = true;
            if (currentNum < 0 && currentNum !== 1){
                console.log(`Number is negative.`);
                currentNum = 0;
            }
            for (i = 2; i < currentNum; i++){
                if (currentNum % i === 0){
                    isPrime = false;
                    break;
                }
            }
            if (isPrime){
                sumPrime += currentNum;
            }
            else {
                sumNonPrime += currentNum;
            }

            command = input[index];
            index++;
        }
        console.log(`Sum of all prime numbers is: ${sumPrime}`);
        console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);

}
sumPrimeNonPrime(["0",
"-9",
"0",
"stop"])
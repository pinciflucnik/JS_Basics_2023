function sequence(input){
    let n = Number(input[0]);
    let currentNum = 1;
    let i = 1;
    while (currentNum <= n){
       
        console.log(currentNum);
        currentNum = currentNum*2 + 1;
    }
}
sequence(["8"])
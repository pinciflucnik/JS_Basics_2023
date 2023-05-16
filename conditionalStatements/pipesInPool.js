function pipesInPool(arg){

    let poolVolume = Number(arg[0]);

    let pipe1 = Number(arg[1]);

    let pipe2 = Number(arg[2]);

    let hours = Number(arg[3]);

    let poolLevel = (pipe1 + pipe2) * hours;

    if (poolVolume >= poolLevel){

        let percentFull = (poolLevel/poolVolume)*100;
        let pipe1percent = ((pipe1*hours)/poolLevel)*100;
        let pipe2percent = ((pipe2*hours)/poolLevel)*100;

        console.log(`The pool is ${percentFull.toFixed(2)}% full. Pipe 1: ${pipe1percent.toFixed(2)}%. Pipe 2: ${pipe2percent.toFixed(2)}%.`)
    }
    else {

        let overflowLiters = poolLevel - poolVolume;
        
        console.log(`For ${hours} hours the pool overflows with ${overflowLiters.toFixed(2)} liters.`);

    }


}
pipesInPool(["100", "100", "100", "2.5"])
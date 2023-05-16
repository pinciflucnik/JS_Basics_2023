function powersOf2(arg){
     let n = Number(arg[0]);
    // let i = 0
    // do {
    //     console.log(Math.pow(2,i));
    //     i = i + 2

    // }
    // while (i <= n);
    for (let i= 0; i <= n; i +=2){
        console.log(Math.pow(2,i));
    }
}
powersOf2(["5"])
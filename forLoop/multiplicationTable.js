function multiplicationTable(arg){
    let number = Number(arg[0]);
    for (i=1; i<=10; i++){
        let result = i*number;
        console.log(`${i} * ${number} = ${result}`);
    }

}
multiplicationTable(["5"]);
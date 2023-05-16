function concatenate (input){
    let firsName = input[0];
    let lastName = input[1];
    let age = input[2];
    let town = input[3]
    console.log(`You are ${firsName} ${lastName}, a ${age}-years old person from ${town}.`);

}
concatenate(["Vlado", "Dimitrov", "36", "Sofia"])
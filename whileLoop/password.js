function password(input){
    let name = input[0];
    let pass = input[1];
    let userInput = input[2];
    let i = 3;
    while (pass !== userInput){
        userInput = input[i];
        i++;
    }
    console.log(`Welcome ${name}!`);

}
password(["Nakov",
"1234",
"Pass",
"1324",
"1234"])
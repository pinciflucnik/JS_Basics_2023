function readText(input){
    let text = input[0];
    let i = 1;
    while (text != "Stop") {
        console.log(text);
 
        text = input[i];
        i++;
    }
}
readText(["Sofia",
"Berlin",
"Moscow",
"Athens",
"Madrid",
"London",
"Paris",
"Stop",
"AfterStop"])
function streamOfLetters(input){
    let index = 0;
    let command = input[index];
    index++;
    let currnetWord = "";
    let nCounter = 0;
    let oCounter = 0;
    let cCounter = 0;
    let sentence = "";
    let regex = /^[A-Za-z]+$/;



    while (command !== "End"){
        if (command.match(regex)){
        if (command == "n" || command == "o" || command == "c"){
            switch (command){
                case "n":
                    nCounter ++;
                    if (nCounter > 1){
                        currnetWord += command;
                    }
                    break;
                case "o":
                    oCounter ++;
                    if (oCounter > 1){
                        currnetWord += command;
                    }
                    break;
                case "c":
                    cCounter ++;
                    if (cCounter > 1){
                        currnetWord += command;
                        break;
                    }
            }
            if (cCounter > 0 && nCounter > 0 && oCounter > 0){
                cCounter = 0;
                nCounter = 0;
                oCounter = 0;
                currnetWord += " "
                sentence = currnetWord;
            }
        }
        else {
            currnetWord += command;
        }


        
        }
        command = input[index];
        index++;

    }

    console.log(sentence);
}
streamOfLetters(["%", "!", "c", "^", "B", "`", "o", "%", "o", "o", "M", ")", "{", "n","\"", "A", "D", "End" ])
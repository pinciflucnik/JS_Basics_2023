function oldBooks(input){
    let book = input[0];
    let i = 1;
    while (i <= input.length +1){
        let currentBook = input[i];
        if (currentBook == "No More Books"){
            console.log(`The book you search is not here!`);
            console.log(`You checked ${i-1} books.`);
        }
        else if (currentBook == book){
            console.log(`You checked ${i-1} books and found it.`);
        }
        i++;
    }

}
oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])
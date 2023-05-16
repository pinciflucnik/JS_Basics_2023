function salary(input){
    let tabCount = Number(input[0]);
    let fullSalary = Number(input[1]);
    for (i = 2; i <= tabCount + 1; i ++){
        let site = input[i];
        switch (site){
            case "Facebook":
                fullSalary -= 150;
                if (fullSalary <=0){
                    return console.log("You have lost your salary.");
                }
                break;
            case "Instagram":
                fullSalary -= 100;
                if (fullSalary <=0){
                    return console.log("You have lost your salary.");
                }
                break;
            case "Reddit":
                fullSalary -= 50;
                if (fullSalary <=0){
                    return console.log("You have lost your salary.");
                }
                break;
            }
    }
   
        console.log(fullSalary);

}
salary(["3",
"49",
"Reddit",
"Stackoverflow.com",
"softuni.bg"])
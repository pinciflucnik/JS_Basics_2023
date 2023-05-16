function examPreparation(input){
    let faults = Number(input[0]);
    let i = 1;
    let averageGrade = 0;
    let sumOfGrades = 0;
    let faultCount = 0;
    let lastName;

    while (i <= input.length +1){
        let name = input[i];
        let grade = Number(input[i+1]);
        sumOfGrades += grade;
        let divider = (i+1)/2;
        switch (name){
            case "Enough":
                 console.log(`Average score: ${averageGrade.toFixed(2)}`);
                 console.log(`Number of problems: ${(i-1)/2}`);
                 console.log(`Last problem: ${lastName}`);
                 return;

        }
        if (grade <= 4){
            faultCount ++;
        }
        if (faultCount >= faults){
            return console.log(`You need a break, ${faultCount} poor grades.`);
        }
        averageGrade = sumOfGrades/divider;

        lastName = name;
        i += 2;
    }
}
examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])
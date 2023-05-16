function graduation(input){
    let name = input[0];
    let i = 1;
    let sumOfGrades = 0;
    let failCount = 0;
    while (i <= 12){
        let currentGrade = Number(input[i]);
        if (currentGrade < 4.00){
            failCount ++;
            switch (failCount){
                case 2: return console.log(`${name} has been excluded at ${i-1} grade`);
            }
        }
        else {
        sumOfGrades += currentGrade;
        }
        i++;
    }
    let grade = sumOfGrades/12;
    console.log(`${name} graduated. Average grade: ${grade.toFixed(2)}`);
}
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])
function trainTheTrainers(input){
    let index = 0;
    let juryCount = Number(input[index]);
    index++;
    let name = input[index];
    index++;
    let sumOfAllGrades = 0;
    let asignmentCounter = 0;
    while (name != "Finish"){
        let sumOfGrades = 0;
        for(i =1; i <= juryCount; i++){
            let grade = Number(input[index]);
            index++;
            sumOfGrades += grade;
            asignmentCounter ++;

        }
        sumOfAllGrades += sumOfGrades;
        let averageGrade = sumOfGrades/juryCount
        console.log(`${name} - ${averageGrade.toFixed(2)}.`);
        name = input[index];
        index++;
    }
    let totalAverage = sumOfAllGrades/asignmentCounter;
    console.log(`Student's final assessment is ${totalAverage.toFixed(2)}.`);
}  
trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])
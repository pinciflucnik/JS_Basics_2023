function grades(arg){
    let studentsCount = Number(arg[0]);
    let fail = 0;
    let threeToFour = 0; 
    let fourToFive = 0;
    let top = 0;
    let average = 0;
    for (i = 1; i <= studentsCount; i ++){
        let grade = Number(arg[i]);
        average += grade;
        if (grade >= 2.00 && grade <= 2.99){
            fail ++;
        }
        else if (grade <= 3.99){
            threeToFour ++;
        }
        else if (grade <= 4.99){
            fourToFive ++;
        }
        else if (grade >= 5.00){
            top ++;
        }
    }
    let topPercent = top/studentsCount*100;
    let fourToFivePercent = fourToFive/studentsCount*100;
    let threeToFourPercent = threeToFour/studentsCount*100;
    let failPercent = fail/studentsCount*100;
    average = average/studentsCount;
    console.log(`Top students: ${topPercent.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${fourToFivePercent.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${threeToFourPercent.toFixed(2)}%`);
    console.log(`Fail: ${failPercent.toFixed(2)}%`);
    console.log(`Average: ${average.toFixed(2)}`);
}
grades(["6"
    ,"2.00"
    ,"3.00"
    ,"4.00"
    ,"5"
    ,"6"
    ,"2.2"
    ])
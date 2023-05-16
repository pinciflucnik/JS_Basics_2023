function sumNumbers(input){
    let firstNum = Number(input[0]);
    let sum = 0;
    let i = 1;
    while (sum < firstNum){
        let nextNum = Number(input[i]);
        sum += nextNum;
        i++
    }
    console.log(sum);
}
sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])
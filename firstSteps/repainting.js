function expence(input){
    let cover = (Number(input[0]) + 2) * 1.50;
    let paint = (Number(input[1]) + Number(input[1])* 0.1) * 14.50 ;
    let diluent = Number(input[2]) * 5;
    let workHours = Number(input[3]);
    let hourlyRate = (cover + paint + diluent + 0.4)*0.3;
    let workersPay = workHours * hourlyRate;
    let endSum = cover + paint + diluent + workersPay + 0.40
    console.log(endSum);
}
expence(["10", "11", "4", "8"])
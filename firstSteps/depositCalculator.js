function calculateIntrest(input){
    let deposit = Number(input[0]);
    let time = Number(input[1]);
    let intrest = Number(input[2])/100;
    let endsum = deposit + time*((deposit*intrest)/12)
    console.log(endsum);
}
calculateIntrest(["200", "3", "5.7"]);
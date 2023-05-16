function test(arg){

    let a = arg[0];
    if (a % 10 == 5){
        console.log("завършва на 5")
    }
    else {
        console.log("не завървша на 5")
    }
}
test(["51"])
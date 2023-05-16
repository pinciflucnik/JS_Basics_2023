function clock2(){
    let hour = 0;
    let minutes = 0;
    let seconds = 0;
    for (i = 1; i<= 86400; i++){
        
        if (seconds === 60 && hour < 24){
            seconds = 0;
            minutes ++;
            if (minutes === 60){
                minutes = 0;
                hour ++;
            }
        }
        console.log(`${hour} : ${minutes} : ${seconds}`);
        seconds ++;
    }
}
clock2()
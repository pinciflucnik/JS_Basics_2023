function clock(){
    let hour = 0;
    let minutes = 0;
    for (i = 1; i<= 1440; i++){
        
        if (minutes === 60){
            minutes = 0;
            hour ++;
        }
        console.log(`${hour} : ${minutes}`);
        minutes ++;
    }
}
clock()
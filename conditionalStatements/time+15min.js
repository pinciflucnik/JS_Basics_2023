function futureTime(arg){

    let hours = Number(arg[0]);

    let minutes = Number(arg[1]) + 15;

    
    if (minutes > 59){
        
        hours = hours + 1;
        minutes = minutes - 60;
       
    }
    if (hours > 23){
        hours = hours - 24; 
      
    }
    if (minutes < 10 ){
        minutes = "0" + minutes;
    }
   
    console.log(`${hours}:${minutes}`);
}
futureTime(["12","45"])
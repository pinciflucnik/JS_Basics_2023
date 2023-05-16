function transportPrice(arg){

    let trip = Number(arg[0]);

    let time = arg[1];

    let taxiTax = 0;

    let busTax = 0.09;

    let trainTax = 0.06;
    

    switch (time){

        case "day":
            taxiTax = 0.79;
          break;
        case "night":
            taxiTax = 0.9;
            break;
        
    }

    let busPrice = busTax*trip;
    let taxiPrice =0.7 + taxiTax*trip;
    let trainPrice = trainTax*trip;

    if(trip < 20){
       
        console.log(taxiPrice.toFixed(2));
    }
    else if (trip >= 100){
        
        console.log(trainPrice.toFixed(2));
    }

    else if (trip >= 20 && trip < 100 ){

        console.log(busPrice.toFixed(2));
    }

    else if (trip === 0){
        console.log("0.00");
    }
    
}
transportPrice(["0","night"])
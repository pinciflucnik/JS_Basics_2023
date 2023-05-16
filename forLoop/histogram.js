function histogram(arg){
    let n = Number(arg[0]);
    let countP1 = 0;
    let countP2 = 0;
    let countP3 = 0;
    let countP4 = 0;
    let countP5 = 0;

    if (n >=1 && n <= 1000){
        for (i = 1; i <=n ; i++){
        let num = Number(arg[i]);
            if (num<200){
                countP1 += 1;

            }
            else if (num <= 399){
                countP2 += 1;
            }
            else if (num <= 599){
                countP3 += 1;
            }
            else if(num <= 799){
                countP4 += 1;
            }
            else if (num <= 1000 ){
                countP5 += 1;
            }
            else {
                console.log("Number out of range");
            }
           

        }
        let p1 = countP1/n*100;
        let p2 = countP2/n*100;
        let p3 = countP3/n*100;
        let p4 = countP4/n*100;
        let p5 = countP5/n*100;
        
        console.log(p1.toFixed(2)+"%");
        console.log(p2.toFixed(2)+"%");
        console.log(p3.toFixed(2)+"%");
        console.log(p4.toFixed(2)+"%");
        console.log(p5.toFixed(2)+"%");

    }
    else {
        console.log("Number out of range");
    }


}
histogram(["14",
"53",
"7",
"56",
"180",
"450",
"920",
"12",
"7",
"150",
"250",
"680",
"2",
"600",
"200"])

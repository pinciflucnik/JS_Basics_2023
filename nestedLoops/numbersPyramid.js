function numbersPyramid(input){

    let n = Number(input[0]);
    let currentNum = 1;
    let isBigger = false;
    let printLine = "";

    for (rows = 1; rows <= n; rows++){
        for (col = 1; col <= rows; col++){
         if (currentNum > n){
            isBigger = true;
            break;
         } 
         printLine = printLine + currentNum + " ";
         currentNum ++;
        }
        console.log(printLine);
        printLine = "";
        if (isBigger){
            break;
        }

    }
}
numbersPyramid(["15"])
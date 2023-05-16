function sumOfNumbers(arg){
    let a=0;
    let b=0;
    let c=0;
    let d=0;
    let e=0;
    let f=0;
    let g=0;
    let h=0;
    let j=0;
    let number = arg[0];
    for (i = 0; i < number.length; i ++){
        let numberToSum = Number(number[i]);
        switch (numberToSum){
            case 1:
            case "1":
                a = a+1;
                break;
            case 2:
            case "2":
                b =b+2;
                break;
            case 3:
            case "3":
                c = c+3;
                break;
            case 4:
            case "4":
                d = d+4;
                break;
            case 5:
            case "5":
                e = e+5;
                break;
            case 6:
            case "6":
                f = f+6;
                break;
            case 7:
            case "7":
                g = g+ 7;
                break;
            case 8:
            case "8":
                h = h+8;
                break;
            case 9:
            case "9":
                j = j+9;
                break;
        }
    }
    let sum = a+b+c+d+e+f+g+h+j;
    console.log(`The sum of the digits is:${sum}`);
}
sumOfNumbers(["77"])
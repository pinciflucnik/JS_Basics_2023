function vowelSum(arg){
    let a = 0;
    let e= 0;
    let i=0;
    let o=0;
    let u=0;
    let text = arg[0];
    for (m = 0; m < text.length; m ++){
        let letter = text[m];
        switch (letter){
            case "a":
            case "A":
                a= a+1;
                break;
            case "e":
            case "E":
                e= e + 2;
                break;
            case "i":
            case "I":
                i= i + 3;
                break;
            case "o":
            case "O":
                o = o + 4;
                break;
            case "u":
            case "U":
                u = u +5;
                break;
        }
    }
    let sum = a + e + i + o + u;
    console.log(sum);
}
vowelSum(["beer"]);
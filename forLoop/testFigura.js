function test(arg){
    let n = Number(arg[0]);
    let symbol = "#";
    let emptySpace = " ";
    for (let i = 1; i <= n; i++){
        if (i === 1 || i === n){
            let border = symbol.repeat(n);
            console.log(border);
        }
        else{
        console.log(symbol+emptySpace.repeat(n-2)+symbol);
        }
    }
}
test(["7"])
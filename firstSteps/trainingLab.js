function workSpaceAmount(arg) {
    
    let w = Number(arg[0])*100;

    let h = Number(arg[1])*100 - 100;
    
    let rows = Math.trunc(w / 120);

    let columns = Math.trunc(h / 70);

    let workSpace = rows * columns -3;

    console.log(workSpace)
 
}
workSpaceAmount(["8.4", "5.2"])
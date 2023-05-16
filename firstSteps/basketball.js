function kinti (razhod){
    let subscription = Number(razhod[0]);
    let shoes = subscription - (subscription * 0.4);
    let clothes = shoes - (shoes * 0.2);
    let ball = clothes * 0.25;
    let accesosies = ball * 0.2;
    console.log (subscription + shoes + clothes + ball + accesosies);
}
kinti (["365"])
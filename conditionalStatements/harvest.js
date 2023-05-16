function harvest(arg){

    let fieldArea = Number(arg[0]);
    let kgGrape = Number(arg[1]);
    let neededWineLitres = Number(arg[2]);
    let workers = Number(arg[3]);
    let wineGrape = (fieldArea*kgGrape);
    let wineQuantity = wineGrape*0.4/2.5;

    if (wineQuantity < neededWineLitres){

        let difference = Math.floor(neededWineLitres - wineQuantity);

        console.log(`It will be a tough winter! More ${difference} liters wine needed.`)
    }
    else if (wineQuantity >= neededWineLitres){

        let difference = Math.ceil(wineQuantity - neededWineLitres);
        let litresPeerWorker = Math.ceil(difference/workers);

        console.log(`Good harvest this year! Total wine: ${Math.ceil(wineQuantity)} liters.`);
        console.log(`${difference} liters left -> ${litresPeerWorker} liters per person.
        `)
    }
}
harvest(["650", "2", "175", "3"])
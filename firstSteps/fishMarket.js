function fishland(arg){

    let skumriqPrice = Number(arg[0]);

    let cacaPrice = Number(arg[1]);

    let safridPrice = cacaPrice * 1.8;

    let palamudKG = Number(arg[2]);

    let safridKG = Number(arg[3]);

    let midiKG = Number(arg[4]);

    let midiPrice = 7.5;

    let palamudPrice = skumriqPrice * 1.6;

    let totalPrice = ((palamudPrice*palamudKG) + (safridPrice*safridKG) + (midiPrice*midiKG)).toFixed(2);

    console.log(totalPrice);
    
}
fishland(["6.9", "4.2", "1.5", "2.5", "1"])
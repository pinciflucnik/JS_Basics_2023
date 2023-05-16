function fishTank(input){
    let lenght = Number(input[0]) / 10;
    let width = Number(input[1]) / 10;
    let height = Number(input[2]) / 10;
    let garbage = Number(input[3]) / 100;
    let volume = lenght * width * height;
    let realVolume = volume - (volume * garbage);
    console.log(realVolume);
}
fishTank(["85","75","47","17"])
function readHours(input){
    let pages = Number(input[0]);
    let readingRate = Number(input[1]);
    let deadline = Number(input[2]);
    let dailyHours = (pages / readingRate)/ deadline;
    console.log(dailyHours);
}
readHours(["212", "20", "2"])
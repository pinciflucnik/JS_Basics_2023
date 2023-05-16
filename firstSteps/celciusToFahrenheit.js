function convertDegrees(niya){

    let celcius = Number(niya[0]);

    let fahrenheit = ((celcius * 9/5) + 32).toFixed(2);

    console.log(fahrenheit);
}
convertDegrees(["-5.5"])
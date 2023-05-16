function summerOutfit(arg){

    let temp = Number(arg[0]);

    let partOfDay = arg[1];

    if (temp >= 10 && temp <= 18){
        if (partOfDay === "Morning"){
            console.log(`It's ${temp} degrees, get your Sweatshirt and Sneakers.`);
        }
        else if (partOfDay === "Afternoon" || partOfDay === "Evening"){
            console.log(`It's ${temp} degrees, get your Shirt and Moccasins.`);
        }
    }
    else if (temp > 18 && temp <= 24){
        if (partOfDay === "Morning" || partOfDay === "Evening"){
            console.log(`It's ${temp} degrees, get your Shirt and Moccasins.`);
        }
        else if (partOfDay === "Afternoon"){
            console.log(`It's ${temp} degrees, get your T-Shirt and Sandals.`);   
        }

    }
    else if (temp >= 25){
        if (partOfDay === "Morning"){
            console.log(`It's ${temp} degrees, get your T-Shirt and Sandals.`);
        }
        else if (partOfDay === "Afternoon"){
            console.log(`It's ${temp} degrees, get your Swim Suit and Barefoot.`);
        }
        else if (partOfDay === "Evening"){
            console.log(`It's ${temp} degrees, get your Shirt and Moccasins.`);
        }
    }
}
summerOutfit(["28",
"Evening"])
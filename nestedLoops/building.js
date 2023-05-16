function building(input){
 let index = 0;
 let floorCount = Number(input[index]);
 index++;
 let apartCount = Number(input[index]);
 index++;
 let phrase = "";
 let totalPhrase = "";
  for (i = floorCount; i >= 1; i--){
    if (i == floorCount){
      phrase = "L"+i;
    }
    else if (i % 2 == 1){
      phrase = "A"+i;
    }
    else if (i % 2 == 0){
      phrase = "O"+i;
    }
    for (m = 0; m < apartCount; m++){
      totalPhrase = totalPhrase + phrase + m + " "
        
    }
    console.log(totalPhrase);
    totalPhrase = "";
  }

}
building(["9","5"])
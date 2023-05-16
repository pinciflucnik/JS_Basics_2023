// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
    let correctName = false;
    let newProp = "";

  for (let i = 0; i < contacts.length; i++){
    let correctProp = false;
    if (name == contacts[i].firstName){
      correctName = true;
      for (let m=0; m < contacts.length; m++){
        let objectProperties = Object.getOwnPropertyNames(contacts[m]);
           if (prop == objectProperties[m]){
            correctProp = true;
            let checkArray = objectProperties[m].length;
            console.log(checkArray);
            newProp = objectProperties[m]
            // let a = newProp.length;
            // return contacts[i][newProp];
           }
      }
      if (correctProp){
        // console.log(contacts[i][newProp]);
        return contacts[i][newProp];
      }
      else {
        return "No such property";
      }
    }
  }
  if (!correctName){
    return "No such contact"
  }
    // Only change code above this line
  }
  
  lookUpProfile("Kristian", "lastName");
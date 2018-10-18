window.onload = function(){
  document.getElementById("powerUpButton").style.visibility = "hidden";
  document.getElementById("friendName").style.visibility = "hidden";
  document.getElementById("statementDiv").style.visibility = "hidden";
  document.getElementById("powerUpButtonSubmit").style.visibility = "hidden";
};




let negContractionArray = [
    ["don't", "do"],
    ["can't", "can"],
    ["didn't", "do"],
    ["shouldn't", "should"],
    ["won't", "will"],
    ["will not", "will"],
    ["can not", "can"],
    ["I'm not", "I am"]
];

let negWordArray = [
  ["worst", "always getting better"],
  ["failure", "will keep trying"],
  ["suck", "will get better"]
];




let userPronoun = [];

let upUserPronoun = "";

let modifyThis = [];

let posArray = [];

let changeNegWordArray = [];

let yetAnotherArray = [];

let finalArray = [];

let friend = "";




function powerUpButton() {
  document.getElementById("friendName").style.visibility = "visible";
  document.getElementById()
let friend = document.getElementById('friendName').value;
document.getElementById("friendName").style.visibilty = "hidden";

  console.log(friend);
}

function getStatement() { //assigns user input to a variable
    let userInput = document.getElementById('statement').value;

    document.getElementById('statement').value = '';

    console.log(userInput);
    let userArray = userInput.split(" ");
    console.log(userArray);

    for (let i = 0; i < userArray.length; i++) { //begin for


        if (userArray[i] === "I" || userArray[i] === "I'm") { //begin if
            userPronoun.push(userArray[i]);
            console.log(userPronoun);
        } else { //end if
            modifyThis.push(userArray[i]);
            console.log(modifyThis);

        } // end else
    } // end i for loop

for ( let n = 0; n < modifyThis.length; n++){

  if(modifyThis[n] === "not"){
    let removed = modifyThis.splice(modifyThis[n], 1);
    console.log(modifyThis);
  } else{

  }
}// end if

  for (let j = 0; j < modifyThis.length; j++) {
        console.log(modifyThis[j]);

        for (let k = 0; k < negContractionArray.length; k++) {
          console.log(negContractionArray[k]);

let wordToChange = modifyThis[j];
let changeToThis = negContractionArray[k][0];
if(wordToChange === changeToThis) {
  console.log(changeToThis)
posArray = modifyThis.splice(modifyThis[j], 1, negContractionArray[k][1]);
console.log(posArray);
} else {
  console.log("haven't found it yet");
}
        }
}

  for (let p = 0; p < modifyThis.length; p++){

    for(let q = 0; q < negWordArray.length; q++){
      if(modifyThis[p] === negWordArray[q][0]) {
        console.log(negWordArray[q][0]);
        let removeMe = modifyThis[p];
        changeNegWordArray = modifyThis.splice(modifyThis[p], 1, negWordArray[q][1]);
        console.log(removeMe);
        changeNegWordArray = changeNegWordArray.splice(modifyThis[p], 1);



        console.log(changeNegWordArray);

      }
      else {
        console.log("not a match");
      } // end else
    } //end if
  } // end q loop

  finalArray = userPronoun.concat(modifyThis);
  console.log(finalArray);
  displayStatement = finalArray.join(" ");
  console.log(displayStatement);

  let elem = document.querySelector("#userInputForm");
  elem.parentNode.removeChild(elem);






function showButton (){
  document.getElementById("powerUpButton").style.visibility = "visible";
};






        finalArray = userPronoun.concat(modifyThis);
        console.log(finalArray);
        displayStatement = finalArray.join(" ");
        console.log(displayStatement);
        document.getElementById("statementDiv").style.visibility = "visible";
        document.getElementById("modifiedStatement").innerHTML = displayStatement;

showButton();

document.getElementById("friendName").style.visibility = "visible";






return displayStatement;
}

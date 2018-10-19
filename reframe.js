




let posQuotesArray = [ "More smiling, less worrying. More compassion, less judgment. More blessed, less stressed. More love, less hate. - Roy T. Bennett, The Light in the Heart",
"Keep Going. Your hardest times often lead to the greatest moments of your life. Keep going. Tough situations build strong people in the end. - Roy T. Bennett, The Light in the Heart",
"Great things happen to those who don't stop believing, trying, learning, and being grateful. ― Roy T. Bennett, The Light in the Heart",
 "The more you feed your mind with positive thoughts, the more you can attract great things into your life. ― Roy T. Bennett, The Light in the Heart","Be Brave and Take Risks: You need to have faith in yourself. Be brave and take risks. You don't have to have it all figured out to move forward. ― Roy T. Bennett, The Light in the Heart",




];

let negContractionArray = [
    ["don't", "do"],
    ["can't", "can"],
    ["didn't", "do"],
    ["shouldn't", "should"],
    ["won't", "will"],
    ["will not", "will"],
    ["can not", "can"],
    ["I'm", "I'm not"],
    ["I'm not", "I am"],



];

let positiveAnt = [
  ["bad", "getting better"],
  ["suck", " am getting better"]
];


let negWordArray = [
  ["worst", "always getting better"],
  ["failing", "will keep trying"],
  ["suck", "will get better"]
];




let userPronoun = [];

let upUserPronoun = "";

let userInput = "";

let userArray =[];

let modifyThis = [];

let posArray = [];

let changeNegWordArray = [];

let yetAnotherArray = [];

let finalArray = [];

let friend = [];

let friendArray = [];

let statementObj = {};

let buttonModifyThis = [];

let displayFriendArray = [];

let friendSplit = [];

let friendNot = [];

let adjacentElem = [];


function modifyStatement() { //assigns user input to a variable





userInput = document.getElementById('statement').value;

    document.getElementById('statement').value = '';

    console.log(userInput);
    userArray = userInput.split(" ");
    console.log(userArray);
 adjacentElem = userArray.slice(0, 2);
 console.log(adjacentElem);





    for (let i = 0; i < userArray.length; i++) { //begin for


        if (userArray[i] === "I" || userArray[i] === "I'm" || userArray[i] === "I'm not") { //begin if
            userPronoun.push(userArray[i]);
            console.log(userPronoun);
        } else { //end if
            modifyThis.push(userArray[i]);
            console.log(modifyThis);
            } // end else
    } // end i for loop
buttonModifyThis = [...modifyThis];
console.log(buttonModifyThis);
for ( let n = 0; n < modifyThis.length; n++){
  if(modifyThis[n] === "not"){
    let removed = modifyThis.splice(modifyThis[n], 1);
    console.log(modifyThis);
    friendNot = modifyThis[n];
    console.log(friendNot);

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
console.log(posArray[0]);
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
        changeNegWordArray.splice(removeMe, 1);


        console.log(changeNegWordArray);

      }
      else {
        console.log("not a match");
      } // end else
    } //end if
  } // end q loop

  switch (true)
  {
    case (adjacentElem[0] === "I'm" && adjacentElem[1] === "not"):
    friendNot = ["is"]
    console.log(friendNot);
    break;

  }


  finalArray = userPronoun.concat(modifyThis);
  console.log(finalArray);
  displayStatement = finalArray.join(" ");
  console.log(displayStatement);



        finalArray = userPronoun.concat(modifyThis);
        console.log(finalArray);
        displayStatement = finalArray.join(" ");
        console.log(displayStatement);

        document.getElementById("modifiedStatement").innerHTML = displayStatement;





powerUpButton();



}



function powerUpButton() {
  document.getElementById("friendStatement").innerHTML = "";
friendSplit[0] = document.getElementById('friendName').value;


displayFriendArray = friendSplit.concat(buttonModifyThis)

console.log(displayFriendArray);

console.log(displayFriendArray);
joinedDisplayFriendArray = displayFriendArray.join(" ");

document.getElementById("friendStatement").innerHTML = joinedDisplayFriendArray;
}

function reset(){
   userPronoun = [];

   upUserPronoun = "";

   userInput = "";

   userArray =[];

   modifyThis = [];

   posArray = [];

   changeNegWordArray = [];

  yetAnotherArray = [];

  finalArray = [];

  friend = [];

  friendArray = [];

  statementObj = {};

  buttonModifyThis = [];

  displayFriendArray = [];

  friendSplit = [];

  friendNot = [];

  document.getElementById("modifiedStatement").innerHTML = "";
  document.getElementById("friendStatement").innerHTML = "";
  document.getElementById("friendName").value = "";



}

var getWindowOptions = function() {
  var width = 500;
  var height = 350;
  var left = (window.innerWidth / 2) - (width / 2);
  var top = (window.innerHeight / 2) - (height / 2);

  return [
    'resizable,scrollbars,status',
    'height=' + height,
    'width=' + width,
    'left=' + left,
    'top=' + top,
  ].join();
};

var twitterBtn = document.querySelector('.twitter-share');
var text = encodeURIComponent("I'm thinking positively! Come check out this website that re-frames your negative thoughts!");
var shareUrl = 'https://twitter.com/intent/tweet?url=' + location.href + '&text=' + text;
twitterBtn.href = shareUrl; // 1

twitterBtn.addEventListener('click', function(e) {
  e.preventDefault();
  var win = window.open(shareUrl, 'ShareOnTwitter', getWindowOptions());
  win.opener = null; // 2
});

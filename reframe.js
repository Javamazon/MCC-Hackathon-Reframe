
function getStatement() {                                    //assigns user input to a variable
  let userInput = document.getElementById('statement').value;
  document.getElementById("userVal").innerHTML = userInput;
  document.getElementById('statement').value='';



 let request = new XMLHttpRequest();
 let key = '32a16e914953a5f4f7d500110d187e60/';
 let url = 'http://words.bighugelabs.com/api/2/32a16e914953a5f4f7d500110d187e60/';
 let format = '/json';



 request.open('GET',url + userInput + format, true);
 request.onload = function () {

   // Begin accessing JSON data here
   var data = JSON.parse(this.response);

let newObj = data;
console.log(newObj);
let synonyms = newObj.adjective.syn;
console.log(synonyms);
let keys = Object.keys(newObj); //getting keys inside newObj
console.log(keys); //loggin keys




console.log(synonyms);




   if (request.status >= 200 && request.status < 400) {



       console.log(this.response);


} //end if
    else {
     console.log('error');
   }//end else
 }

 request.send();

}; //end function

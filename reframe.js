


function myFunction() {
  let userStatement = document.getElementById('statement').value;
  document.getElementById("userVal").innerHTML = userStatement;
  document.getElementById('statement').value='';

console.log(userStatement);



function newArray() {
let userArray = userStatement.trim().split(' ');
console.log(userArray);
};

newArray();
};


var baseURL = 	'https://od-api.oxforddictionaries.com/api/v1';
var key = '	fa58377c04b48c72fd7171b95ba19d77';

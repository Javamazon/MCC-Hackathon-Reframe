



let keyword = 'stupid';
let userArr = [];









function getUserStatement() {
  
let userStatement = document.getElementById('statement').value;
console.log(userStatement)

userArr = userStatement.split(' ');
console.log(userArr)

dictionaryCall(userArr)
}




function dictionaryCall(userArr) {
  console.log(userArr)
  
  userArr.forEach(function (word) {
    console.log(word)

    let dictCall = fetch('https://www.dictionaryapi.com/api/v3/references/thesaurus/json/' + word + '?key=9e828a57-8089-4259-b2e8-745a07bf5308', {
      'method': 'GET'
    })
  
  
  .then(resp => resp.json())
  .then(data => {

    let part = data[0].fl
    let ant = data[0].meta.ants[0]
    let antWord = [];

    if (part === 'adjective') {
      let newWord = ant[Math.floor(Math.random() * ant.length)];
      
    
      
      console.log(userArr)
      let x = userArr.indexOf(word)
      console.log(x)
      let newArr = userArr.splice(x, 1, newWord)
      console.log(userArr)
      console.log(newArr)
}



    
    console.log(data[0].meta)
    console.log(data[0].meta.ants)
    console.log(data[0].fl)
    console.log(data[0].meta.id)
  })
  


  } )
}
      

  
console.log('***Hello Node.JS CALCULATOR running***');

console.log('*** run by type command: node calc.js');

const readline1first = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  

  
readline1first.question('Enter First number: ', first => {
    console.log(first + '!');   
    
   readline1first.question('Enter Operator "+,-,*,/": ', operator => {      
        console.log(operator + '!');  
  
      readline1first.question('Enter Second number: ', second => {          
            console.log(second + '!');  
  
            result(first, operator, second);
  
         readline1first.close();
          });
  
      });
    
     
  });


  


  function result(first, operator, second)
  {
      switch (operator) {
          case "+":          
            console.log("result is " + plus(first, second));
            break;
          case "-":
              console.log("result is " + minus(first, second));
            break;
          case "*":
              console.log("result is " + multipler(first, second));
            break;
          case "/":
              console.log("result is " + divider(first, second));
            break;        
          default:
            console.log("Not valid operator");
        }
  
      return; 
  }
  
  
  
  function plus(first, second)
  {
      return (Number(first) + Number(second));
  }
  
  function minus(first, second)
  {
      return (Number(first) - Number(second));
  }
  
  function multipler(first, second)
  {
      return (Number(first) * Number(second));
  }
  
  function divider(first, second)
  {
      return (Number(first) / Number(second));
  }
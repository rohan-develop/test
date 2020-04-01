const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const arr = ['rohan','neha','sibbu'];
rl.question('Enter a name ', (answer) => {
 if(arr.includes(answer)){
     console.log('exists');
 }
 else {console.log("not found");}

 
  rl.close();
});
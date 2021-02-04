//var nameVar = "Hime";
//var numNumb = 19;
//console.log(nameVar);
//console.log(numNumb);
//numNumb = 37;
//console.log(numNumb);
//numNumb = 26;
//console.log(numNumb);

function firstFunction(){
  console.log("this is my first function");
  console.log(numNumb);
  console.log(nameVar);
}

function testBigger (firstNum,secondNum){
  console.log("First Number: " + firstNum + " Second Number: " + secondNum + " Comparison: " + (firstNum>secondNum) );
}

var nameVar = "Hime";
var numNumb = 26;
firstFunction();

testBigger(5,8);
testBigger(8,5);

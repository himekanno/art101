//var nameVar = "Hime";
//var numNumb = 19;
//console.log(nameVar);
//console.log(numNumb);
//numNumb = 37;
//console.log(numNumb);
//numNumb = 26;
//console.log(numNumb);

//function firstFunction(){
  //console.log("this is my first function");
  //console.log(numNumb);
  //console.log(nameVar);
//}

//function changeBCK(divId,color){

//}
//changeBCK("testDiv_id","red");
//changeBCK("test1Div_id","black");

//function testBigger (firstNum,secondNum){
  //console.log("First Number: " + firstNum + " Second Number: " + secondNum + " Comparison: " + (firstNum>secondNum) );
//}

//var nameVar = "Hime";
//var numNumb = 26;
//firstFunction();

//testBigger(5,8);
//testBigger(8,5);

//function testBiggerWithReturn (firstNum,secondNum){
  //var result;
  //result = firstNum>secondNum;
  //return result;

//}
//console.log(testBiggerWithReturn(8,5));

//function testBiggerWithReturn (firstNum,secondNum){
  //var result;
  //result = firstNum+secondNum;
  //return result;

//}
//var sum = testBiggerWithReturn(8,5);
//console.log(sum);
//sum = sum + 8;
//console.log(sum);

// First Name: Hime Last Name: Kanno
function userName (firstName,lastName){
  var result = firstName + " " + lastName;
  return result;
}

console.log(userName("Hime","Kanno"))
console.log(userName("Toni","Rouhana"))

var myVarFun = function(){
  console.log("Functions are nice!");
}
myVarFun();

//setTimeout(myVarFun,2000)

setTimeout(function() {
     console.log("I am so tired”);
}, 3000);

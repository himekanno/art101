/*
 * Author: Hime Kanno
 * Created: 25 February 2021
 */


function fizzBuzzBoom(){
 for (var num=1; num <= 200; num++) {

   str = num + " - " + "";

   if (num % 3 == 0){
   str += "Fizz";
   }

   if (num % 5 == 0){
     str += "Buzz";
   }

   if (num % 7 == 0){
     str += "Boom";
   }

   if (num % 9 == 0){
     str += "Bang";
   }

   else{
     str+= "";
   }

   $("#output").append("<p>" + str + "</p>");

}};

$("#submit-button").css('background','#e46464');
$("#submit-button").click(function(){
  fizzBuzzBoom();
});

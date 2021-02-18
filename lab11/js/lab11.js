/*
 * Author: Hime Kanno
 * Created: 17 February 2021
 */


 $("#challenge").append("<button id=challenge_button>Challenge</button>");
 $("#challenge").css("padding", "20px");
 $("#challenge_button").click(function(){
   $("#challenge").toggleClass("special");
   $("#results_button").css('background','darkRed');


 });

 $("#problems").append("<button id=problems_button>Problems</button>");
 $("#problems").css("padding", "20px");
 $("#problems_button").click(function(){
   $("#problems").toggleClass("special");
   $("#challenge_button").css('background','LavenderBlush');

 });

 $("#results").append("<button id=results_button>Results</button>");
 $("#results").css("padding", "20px");
 $("#results_button").click(function(){
   $("#results").toggleClass("special");
   $("#problems_button").css('background','indianRed');


 });

/*
 * Author: Hime Kanno
 * Created: 30 January 2021
 */

 // Define Variables
 var myTransport = ["walk","car","bus","train"];
 var myMainRide = {
    make: "Toyota",
    model: "C-HR",
    color: "Black",
    year: 2019,
    age: "2 years",
  };

// Output Variables
document.writeln("My Forms of Transportation: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

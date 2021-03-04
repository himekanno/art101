/*
 * Author: Hime Kanno
 * Created: 3 March 2021
 */


 // Using the core $.ajax() method
 function api_get (){
   $.ajax({
     // The URL for the request (from the api docs)
     url: "https://icanhazdadjoke.com/",
     // The data to send (will be converted to a query string)
     data: {},
     // Whether this is a POST or GET request
     type: "GET",
     // The type of data we expect back
     dataType : "text",
     // What do we do when the api call is successful
     //   all the action goes in here
     success: function(data) {
         // do stuff
         $("#output").html(data);
         console.log(data);
     },
     // What we do if the api call fails
     error: function (jqXHR, textStatus, errorThrown) {
         // do stuff
         console.log("Error:", textStatus, errorThrown);
     }
 })
 }

 $("#activate").click(api_get)

 $("#activate").css('background','#fcc404');

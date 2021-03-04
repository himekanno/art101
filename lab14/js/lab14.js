/*
 * Author: Hime Kanno
 * Created: 1 March 2021
 */

// Create a function sortingHat()
function sortingHat(str) {
  len = str.length;
  mod = len % 4;
    if (mod == 0) {
      return "Gryffindor"
    }
    else if (mod == 1) {
      return "Slytherin"
    }
    else if (mod == 2) {
      return "Hufflepuff"
    }
    else if (mod == 3) {
      return "Ravenclaw"
    }
}

// Create an event listener attached to #button
var myButton = document.getElementById("submit-button");
myButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    debugger;
    var house = sortingHat(name);
    newText = "<p>The Sorting Hat has sorted you into " + house + "!" + "</p>";
    document.getElementById("output").innerHTML = newText;
    debugger;
})

// Change color of button
$("#submit-button").css('background','#c5d6d2');

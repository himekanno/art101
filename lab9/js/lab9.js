/*
 * Author: Hime Kanno
 * Created: 9 February 2021
 */

var OutputEl = document.getElementById("output");

var new1El = document.createElement("p");
new1El.innerHTML = "This is something new!";
new1El.style.color = "DimGray";
new1El.style.font = "italic bold 20px arial,serif";

var new2El = document.createElement("p")
new2El.innerHTML = "This is something newer!";
new2El.style.color = "DarkSlateGray";
new2El.style.font = "italic bold 30px arial,serif";

OutputEl.appendChild(new1El);

OutputEl.appendChild(new2El);

var divEl = document.getElementById("div_1");
divEl.innerHTML = "Click the button?";
console.log(divEl.innerHTML);

var button = document.createElement("button");
document.body.appendChild(button);
button.innerHTML = "Press me!";

button.onclick = function(){
  divEl.innerHTML= "Thanks for clicking!"

}

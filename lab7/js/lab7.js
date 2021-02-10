/*
 * Author: Hime Kanno
 * Created: 30 January 2021
 */

// sortUserName
 function sortUserName(userName) {
     console.log(userName);
     // split name into array
     var nameArray = userName.split("");
     console.log(nameArray);
     // sort array
     var nameArraySort = nameArray.sort();
     console.log(nameArraySort);
     // join array to make new name
     var nameSorted = nameArraySort.join("");
     console.log(nameSorted);
     return nameSorted;
 }

// output new name
 document.writeln("Here's your new name made just for you: ",
     sortUserName(window.prompt("Please enter your name so I can fix it!")), "</br>");

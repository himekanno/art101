// for (var index=0 ; index<10 ; index++){
//   //code block
//   //create 10 divs inside the container div with class name = "box"
//   var boxE1 = document.createElement("div");
//   boxE1.className="box";
//   //ad id to each box that looks like box_id_0, box_id_1, ...
//   boxE1.id="box_id_"+(index+=1);
//   document.getElementById("container").appendChild(boxE1);
//   console.log(index);
//
// }
for (var i= 0;i<500;i++){
  if(i%2==0){
  $("#container").append("<div id='box_id_"+i+"' class='box_even'></div>")
  }else{
  $("#container").append("<div id='box_id_"+i+"' class='box_odd'></div>")
  }
}

// var counter = 0
// while(condition<10){
//   //code block
//   console.log(counter);
//   //counter++;
//   //countercounter = counter+1;
//   counter += 1;
// }

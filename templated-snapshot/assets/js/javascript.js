function submitBio(){
  var nameVar = document.getElementById("name").value;
  console.log(nameVar);
  var emailVar = document.getElementById("email").value;
  console.log(emailVar);
  var messageVar = document.getElementById("message").value;
  console.log(messageVar);
  document.getElementById("name_email_id").innerHTML = "Name: " + nameVar + "<br>" + "Email: " + emailVar + "<br>" + "Message: " + messageVar;
}
document.getElementById("bio_submit_id").addEventListener('click',submitBio);

// function colorMe(){
//   //document.getElementById("name_email_id").style.color = "darkRed";
//   document.getElementById("name_email_id").className="color_me";
// }
// document.getElementById("color_me_id").addEventListener('click',colorMe);

$("#color_me_id").click(function(){
  $(this).parent()
  $("#name_email_id").toggleClass("color_me");
})

function getAjax(){
$.ajax({
  url:"data/dataXML.xml",
  type:"GET",
  dataType:"text",
  success: successFun,
  error: errorFun,
  complete: function (xhr, status){
    console.log("request is complete");
  }

});
}
  function successFun(result){
    console.log(result);
    $("#ajax_txt").html(result.getElementByTagName('to'));
  }
  function errorFun(xhr, status, strErr){
    console.log("error");
  }
  $("#click_ajax").click(getAjax);

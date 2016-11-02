$(document).ready(function() {

    // Change the background color of #red-bg to red
  $("#change-red").on("click", function() {
    $("#red-bg").css("background-color", "red");
  });

  // Change the background color of #green-bg to green
$("#change-green").on("click", function() {
  $("#green-bg").css("background-color", "green");
});

// Change the background color of #blue-bg to blue
$("#change-blue").on("click", function() {
$("#blue-bg").css("background-color", "blue");
});

$("#make-big").on("click", function() {
  $("#embiggened").width("500px").height("500px");
});

$("#make-small").on("click", function() {
  $("#enlittled").width("50px").height("50px");
});

$("#animate-div").on("click", function() {
  $("#animated").addClass("animate");
});

// $('create-overlay').on("click",(function(){
//   $('#animated').addClass('overlay');
// }

});

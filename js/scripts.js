$(document).ready(function() {
  $("form#character_quiz").submit(function(event) {
    var answer1 = parseInt($("select#life_goal").val());
    var answer2 = parseInt($("select#flaw").val());
    var answer3 = parseInt($("input:radio[name=rebellious]:checked").val());

    if ((answer1 === 1 || answer1 === 5) && answer2 === 1 && answer3 === 2) {
      $("#character_quiz").fadeOut();
      $("#lizzy").fadeIn();
    } else if ((answer1 === 2 || answer1 === 3) && answer2 === 4 && answer3 === 1) {
      $("#character_quiz").fadeOut();
      $("#edna").fadeIn();
    } else if (answer1 === 3 && answer2 === 5 && answer3 === 1) {
      $("#character_quiz").fadeOut();
      $("#ellen").fadeIn();
    } else if ((answer1 === 4 || answer1 === 5) && answer2 === 2 && answer3 === 2) {
      $("#character_quiz").fadeOut();
      $("#jane").fadeIn();
    } else if (answer1 === 5 && (answer2 === 4 || answer2 === 2) && answer3 === 1) {
      $("#character_quiz").fadeOut();
      $("#kit").fadeIn();
    } else if (answer1 === 6 && (answer2 === 3 || answer2 === 2) && answer3 === 2) {
      $("#character_quiz").fadeOut();
      $("#emma").fadeIn();
    } else {
      $("#character_quiz").fadeOut();
      $("#other").fadeIn();
    }

  event.preventDefault();

  });
});

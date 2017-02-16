$(document).ready(function(event) {
  event.preventDefault();

  var userAge  = parseInt(prompt("Enter your age!"));

  if (userAge >= 18) {
    $(".votingInfo").show();
  } else {
    $(".underAgeInfo").show();
  };
});

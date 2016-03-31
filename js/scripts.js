$(document).ready(function() {
  if(!confirm("I am over 18. (Press cancel if you are under 18.)")) {
    $("#futurevoters").show();
  } else {
    if(confirm("This is my first time voting. (Press cancel if you have voted before.)")) {
      $("#firsttimevoters").show();
    }
  }

});

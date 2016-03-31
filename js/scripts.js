$(document).ready(function() {
  if(!confirm("I am over 18. (Press cancel if you are under 18.)")) {
    $("#futurevoters").show();
  } else {
    if(confirm("This is my first time voting. (Press cancel if you have voted before.)")) {
      $("#firsttimevoters").show();
    }
  }

  $("form#politicalBeliefs").submit(function(event) {
    event.preventDefault();
    var partyInput = parseInt($("select#party").val());
    var foreignInput = parseInt($("select#foreign").val());
    var domesticInput = parseInt($("select#domestic").val());
    var spendingInput = parseInt($("select#spending").val());
    var yourParty = (partyInput+spendingInput+domesticInput+foreignInput);

    if(yourParty>28) {
      alert("You should join the Constitutional Party");
    } else if(yourParty>24) {
      alert("You should join the Tea Party Republicans");
    } else if(yourParty>20) {
      alert("You should join the Fiscal Conservative Republicans");
    } else if(yourParty>16) {
      alert("You should join the Libertarians");
    } else if(yourParty>12) {
      alert("You should join the Independents");
    } else if(yourParty>8) {
      alert("You should join the Blue-Collar Democrats");
    } else if(yourParty>4) {
      alert("You should join the College Educated Democrats");
    } else if(yourParty>0) {
      alert("You should join the Green Party");
    } else {
      alert("You should not vote...");
    }
  });
});

var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $("#formId").submit(function(event) {
    event.preventDefault();
    var userName = $('#userInput').val();
    $('#userInput').val('');
    newUser.getRepos(userName);
  });
});

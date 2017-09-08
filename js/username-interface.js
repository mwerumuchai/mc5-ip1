var apiKey = require('./../.env').apiKey;
var Repo = require ('./../js/username.js').Repo;

$(document).ready(function() {
  var newUser = new Repo();
  $("#formId").submit(function(event) {
<<<<<<< HEAD
    $('.showUserName').empty();
    $('.Img').empty();
    $('.NumberOfRepos').empty();
    $('.Repos').empty();
    $('.newUser').empty();
=======
>>>>>>> parent of a10a996... add css files
    event.preventDefault();
    var userName = $('#userInput').val();
    $('#userInput').val('');
    newUser.getRepos(userName);
  });
});

var apiKey = require('./../.env').apiKey;

exports.Repo = function() {

};

exports.Repo.prototype.getRepos = function(userName,public_repos,avatar_url) {
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response) {
    $('.userName').append('<h4>Username:' + response.login + '</h4>');
    $('.NumberOfRepos').append('<h4>No of respositories:' + response.public_repos + '</h4>');
    $('.showImg').append("<img src=" + response.avatar_url + ">");
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });

$.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){
    for(var i = 0; i < response.length; i++){
      $('.Repos').append('<h3>' + 'Repo name: ' + '<h4>' + response[i].name + '</h4><p>' + response[i].description + ' <a href="' + response[i].html_url + '"><br> <h4> Link </h4> </a></p>');
    }
    $('.Repos').append('</ol>');
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
};

var apiKey = require('./../.env').apiKey;

exports.Repo = function() {

};

exports.Repo.prototype.getRepos = function(userName,public_repos,avatar_url) {
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response) {
    $('.userName').append('<h4>Username:' + response.login + '</h4>');
    $('.NumberOfRepos').append('<h4>No. of respositories:' + response.public_repos + '</h4>');
    $('.Img').append("<img src=" + response.avatar_url + ">");
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });

$.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){
    for(var i = 0; i < response.length; i++){
      $('.Repos').append('<h4>' + 'Repo name: ' + '<h5>' + response[i].name + '</h5><p>' + response[i].description + ' <a href="' + response[i].html_url + '"><br> <h5> Link </h5> </a></p>');
    }
    $('.Repos').append('</ol>');
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
};

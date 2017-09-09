(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "3a7b7c6cf3147333adc719646b4dc4decb650553";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

exports.Repo = function() {

};

exports.Repo.prototype.getRepos = function(userName,public_repos,avatar_url) {
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response) {

    $('.showUserName').append('<h4><strong><i>Username: ' + response.login + '</i></strong></h4>');
    $('.NumberOfRepos').append('<h4><strong><i>No. of respositories: ' + response.public_repos + '</i></strong></h4>');
    $('.Img').append("<img src=" + response.avatar_url + ">");

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

},{"./../.env":1}],3:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;
var Repo = require ('./../js/username.js').Repo;

$(document).ready(function() {
  var newUser = new Repo();
  $("#formId").submit(function(event) {
    $('.showUserName').empty();
    $('.Img').empty();
    $('.NumberOfRepos').empty();
    $('.Repos').empty();
    event.preventDefault();
    var userName = $('#userInput').val();
    $('userInput').val('');
    newUser.getRepos(userName);
  });
});


    

},{"./../.env":1,"./../js/username.js":2}]},{},[3]);

'use strict';

var middleware = require('./middleware');
var questions = require('./questions');
var helpers = require('./helpers');
var data = require('./data');

module.exports = function(verb, base, env) {
  helpers(verb, base, env);
  middleware(verb, base, env);
  questions(verb, base, env);
  data(verb, base, env);
};
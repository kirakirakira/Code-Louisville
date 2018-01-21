var bcrypt = require('bcrypt');
var colors = require('colors');
var unsecuredPlainTextPassword = "password";

bcrypt.genSalt(10, function(error, salt) {
  bcrypt.hash(unsecuredPlainTextPassword, salt, function(error, hash) {
    //store has in your password db
    console.log(hash.green);
  });
});

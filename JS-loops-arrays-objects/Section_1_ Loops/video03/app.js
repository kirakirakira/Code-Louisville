var upper = 10000;
var randomNum = randomNumber(upper);
var guess;
var attempts = 0;

function randomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

while(guess != randomNum) {
    guess = randomNumber(upper);
    attempts+=1;
}

document.write("<p>The random number was: " + randomNum + "</p>");
document.write("<p>It took the computer " + attempts + " guesses to get the correct number.</p>");

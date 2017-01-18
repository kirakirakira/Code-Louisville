
function print(message) {
  document.write(message);
}

var correctAnswers = 0;
var correctQuestions = [];
var incorrectQuestions = [];

var questionsAnswers = [
    ['How many planets are there?', '8'],
    ['How many moons does Jupiter have?', '67'],
    ['What color are my socks?', 'white']
];

function askQuestions() {
    for (var i = 0; i < questionsAnswers.length; i++) {
        answer = prompt(questionsAnswers[i][0]);
        if (answer === questionsAnswers[i][1]) {
            correctAnswers +=1;
            correctQuestions.push(i);
        }
        else {
            incorrectQuestions.push(i);
        }
    }
    print('You got ' + correctAnswers + ' questions correct.');
    print('<p>Questions you got correct are: </p>');
    for (var j = 0; j < correctQuestions.length; j++) {
        print('<li>' + questionsAnswers[correctQuestions[j]][0]+ '</li>');
    }

    print('<p>Questions you got incorrect are: </p>');
    for (var j = 0; j < incorrectQuestions.length; j++) {
        print('<li>' + questionsAnswers[incorrectQuestions[j]][0]+ '</li>');
    }
}

askQuestions();

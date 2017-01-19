var message = '';
var student;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

while (true) {
    student = prompt('Search student records: type a name [Jody] (or type "quit" to end)');
    if (student.toLowerCase() === "quit" || student === null) {
        break;
    }
    else {
        for (var i = 0; i < students.length; i++) {
            if (student === students[i].name) {
                message += '<h2>Student: ' + students[i].name + '</h2>';
                message += '<p>Track: ' + students[i].track + '</p>';
                message += '<p>Points: ' + students[i].points + '</p>';
                message += '<p>Achievements: ' + students[i].achievements + '</p>';
                print(message);
            }
        }
    }
}

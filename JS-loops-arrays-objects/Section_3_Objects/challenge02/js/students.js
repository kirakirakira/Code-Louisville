var students = [
  {
   name: 'Dave',
    track: 'Front End Development',
    achievements: 158,
    points: 14730
  },
  {
    name: 'Jody',
    track: 'iOS Development with Swift',
    achievements: '175',
    points: '16375'
  },
  {
    name: 'Jordan',
    track: 'PHP Development',
    achievements: '55',
    points: '2025'
  },
  {
    name: 'John',
    track: 'Learn WordPress',
    achievements: '40',
    points: '1950'
  },
  {
    name: 'Trish',
    track: 'Rails Development',
    achievements: '5',
    points: '350'
  }
];

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML += message;
}

for (var i = 0; i < students.length; i++) {
    var message = '<h2>Students: ' + students[i].name + '</h2>';
    message += '<p>Track: ' + students[i].track + '</p>';
    message += '<p>Achievements: ' + students[i].achievements + '</p>';
    message += '<p>Points: ' + students[i].points + '</p>';
    print(message);
}

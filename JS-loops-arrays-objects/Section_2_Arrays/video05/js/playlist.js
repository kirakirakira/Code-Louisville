var playList = [
  'I Did It My Way',
  'Respect',
  'Imagine',
  'Born to Run',
  'Louie Louie',
  'Maybellene'
];

function print(message) {
  document.write(message);
}

function printList(list) {
    var listHTML = '<ol>';
    for (var i = 0; i < list.length; i++) {
        listHTML += '<li>' + list[i] + '</li>';
    }
    print(listHTML);
}

printList(playList);

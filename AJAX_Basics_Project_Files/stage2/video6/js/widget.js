// Employee In or Out Status

var xhr = new XMLHttpRequest();
xhr.open('GET', 'data/employees.json');
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i=0; i<employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
xhr.send();

// Room Availability Status
var xhr2 = new XMLHttpRequest();
xhr2.open('GET', 'data/rooms.json');
xhr2.onreadystatechange = function () {
  if(xhr2.readyState === 4 && xhr2.status === 200) {
    var rooms = JSON.parse(xhr2.responseText);
    var statusHTML2 = '<ul class="rooms">';
    for (var i=0; i<rooms.length; i += 1) {
      if (rooms[i].available === true) {
        statusHTML2 += '<li class="empty">';
      } else {
        statusHTML2 += '<li class="full">';
      }
      statusHTML2 += rooms[i].room;
      statusHTML2 += '</li>';
    }
    statusHTML2 += '</ul>';
    document.getElementById('roomList').innerHTML = statusHTML2;
  }
};
xhr2.send();

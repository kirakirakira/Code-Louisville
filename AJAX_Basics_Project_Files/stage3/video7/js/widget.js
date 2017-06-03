$(document).ready(function () {
  $.getJSON('data/employees.json', function (data) {
    var statusHTML = '<ul class="bulleted">';
    $.each(data,function (index, employee) {
      if (employee.inoffice === true) {
        statusHTML +='<li class="in">';
      } else {
        statusHTML +='<li class="out">';
      }
      statusHTML += employee.name + '</li>';
    });
    statusHTML += '</ul>';
    $('#employeeList').html(statusHTML)
  }); // end getJSON

  $.getJSON('data/rooms.json', function (data) {
    var roomHTML = '<ul class="rooms">';
    $.each(data, function (index, confRoom) {
      if (confRoom.available === true) {
        roomHTML += '<li class="empty">';
      }
      else {
        roomHTML += '<li class="full">';
      }
      roomHTML += confRoom.room + '</li>';
    });
    roomHTML += '</ul>';
    $('#roomList').html(roomHTML);
  }); // end getJSON
}); // end ready

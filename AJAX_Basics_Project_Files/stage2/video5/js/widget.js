var xhr = new XMLHttpRequest();
xhr.open('GET', 'data/employees.json');
console.log("hello there");
xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  console.log(xhr.status);
  if (xhr.readyState === 4) {
    var employees = JSON.parse(xhr.responseText);
    console.log("hi there");
    var statusHTML = '<ul class="bulleted">';
    for (var i = 0; i < employees.length; i+=1) {
        if (employees[i].inoffice === true) {
            statusHTML += '<li class="in">';
            console.log("made it to inoffice");
        }
        else {
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

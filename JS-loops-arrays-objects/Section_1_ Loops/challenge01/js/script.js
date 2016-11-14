var html = '';
var red;
var green;
var blue;
var rgbColor;

for (var i = 0; i < 10; i++) {
    red = randomColor();
    green = randomColor();
    blue = randomColor();
    rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    html += '<div style="background-color:' + rgbColor + '"></div>';
}

function randomColor() {
    return Math.floor(Math.random() * 256 );
}

document.write(html);

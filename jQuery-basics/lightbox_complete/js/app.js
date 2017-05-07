//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append($image);

$overlay.append($caption);

//Add overlay
    //An image
    //A caption

$("body").append($overlay);

//1. Capture the click event on a link to an image
$("#imageGallery a").click(function(event) {
    event.preventDefault();
    var imageLocation = $(this).attr("href");
    //1.2 Update overlay with the image linked in the link
    $image.attr("src", imageLocation);
    $overlay.show();
    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);

});
    //1.1 Show the overlay.
    //1.2 Update overlay with the image linked in the link
    //1.3 Get child's alt attribute and set caption
//2. Add overlay
    //2.1 An image
    //2.2 A caption
//3. When overlay is clicked
$overlay.click(function() {
    $(this).hide();
})
    //3.1 Hide the overlay

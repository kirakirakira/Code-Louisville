//Prevent spoilerphobes from seeing spoilers
//Solution: Hide spoilers and reveal them through user interaction

//1, Hide spoiler
$(".spoiler span").hide();

//2, Add buttons
$(".spoiler").append("<button>Reveal spoiler!</button>");

//3, When button pressed
$("button").click(function() {
    //3.1 Show spoiler next to the button clicked
    $(this).prev(".spoiler span").show();
    //3.2 Get rid of button
    $(this).remove();
})

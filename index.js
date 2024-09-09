$("h1").addClass("big-title");
$("div.lol").addClass("fancy-body");

// Handle text
$("p").text("Dey whine me 🌚");

//Handle inner-html
$("button").html("<b><em>Ola 👋</em></b>");

// jQuery uses JavaScript's objects and methods
$("a").attr("href", "www.yahoo.com"); //get the href attribute(object) and set its destination(methods) as Yahoo!.com

// Adding event listeners
$("h1").click(function() {
    $("h1").css("color", "yellow");
});

// Removing for loops
$("button").click(function() {
    $("h1").css("color", "indigo");
});

// Detecting keypresses
$("input").keypress(function(event) {
    console.log(event.key);
    $("h1").text(event.key);
});

// Shorter method
$("p").on("mouseover", function() {
    $("h1").text("😈");
})

// Adding and removing elements with jquery
$("h1").before("<button>New me</button>");
$("h1").after("<button>Old me</button>");
$("h1").prepend("👋");
$("h1").append(" champ!");

// Remove elements
// $("button").remove();

// Animation with jQuery
$("button").on("click", function() {
    $("p").fadeToggle(); /*You can also use slide up and slide down*/
});

$("button").on("click", function() {
    $("h1").animate({opacity: 0.5}); /*You can chain more than one method*/
});
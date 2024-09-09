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
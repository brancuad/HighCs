var links = '<div id="links">' +
            '<a href="./index.html" id="logowrapper"><img id="logo" src="../Images/logo.png"> <span id="logotext">Stony Brook High C\'s</span></a>' +
            '<div id="openingLinks">' +
                '<a class="bars" onclick="toggleMenu();"><img src="../Images/Icon/PNG/bars_white.png" /></a>' +
                '<a class="menu" href="./index.html">Home</a>' +
                '<a class="menu" href="./about.html">About</a>' +
                '<a class="menu" href="./music.html">Music</a>' +
                '<a class="menu" href="./members.html">Members</a>' +
                '<a class="menu" href="./booking.html">Booking</a>' +
                '<a class="menu" href="./audition.html">Audition</a>' +
            '</div>' +
        '</div>';

var footer = '<a class="icon" href="mailto:stonybrookhighcs@gmail.com"><img src="../Images/Icon/PNG/envelope_white.png" /></a>' +
    '<a class="icon" href="http://facebook.com/sbhighcs"><img src="../Images/Icon/PNG/facebook_white.png" /></a>' +
    '<a class="icon" href="http://instagram.com/sbhighcs"><img src="../Images/Icon/PNG/instagram_white.png" /></a>' +
    '<a class="icon" href="http://twitter.com/sbhighcs"><img src="../Images/Icon/PNG/twitter_white.png" /></a>' +
    '<a class="icon" href="http://youtube.com/sbhighcs"><img src="../Images/Icon/PNG/youtube_white.png" /></a><br />' +
    '<div style="font-size: 12px; margin-top: 10px;; font-weight: normal;">Website by <a href="mailto:brandon.cuadrado@stonybrook.edu">Brandon Cuadrado</a></div>';

$ (function () {
    document.title = "Stony Brook High C's";
    $("#header").append(links);
    $("#footer").append(footer);
    $("head").append('<link rel="shortcut icon" type="image/png" href="../Images/mic.png"/>');

    $(".icon").attr("target", "_blank");

    $("body").fadeIn(600);
});

var toggleMenu = function() {
    menuItems = $(".menu");
    if (menuItems.css("opacity") == 0) {
        menuItems.css("opacity", 1).show();;
    }
    else {
        menuItems.css("opacity", 0).hide();
    }
}
//Parallax 
function simpleParallax() {
    //This variable is storing the distance scrolled
    var scrolled = $(window).scrollTop() + 1;

    //Every element with the class "scroll" will have parallax background 
    //Change the "0.3" for adjusting scroll speed.
    $('.scroll').css('background-position', '0' + -(scrolled * 0.7) + 'px');
    console.log('working');
}
//Everytime we scroll, it will fire the function
$( window ).scroll( function (e) {
    simpleParallax();
    console.log('parallax working');
});

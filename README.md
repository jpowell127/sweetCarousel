sweetCarousel
=============

jQuery.sweetCarousel

Lightweight jQuery extension for adding a responsive image carousel to any site.

Installation

Include the latest version of jQuery and jQuery.sweetCarousel.js just before the closing </body> tag in your HTML document:

<script src="jQuery.min.js"></script>  
<script src="jQuery.sweetCarousel.js"></script>

How to Use

Create a <div id="#example"></div> in your HTML document with any ID you would like to use (#example used for demonstartion only) and then pass that div to .sweetCarousel as shown below.

Syntax Example

$(document).ready(function(){
    $('#example').sweetCarousel();
});

Custom Parameters
Sweet carousel comes with a defualt set of images served up via Amazon CloudFront along with a default set of captions but you can provide your own by passing in an array of slides as shown below.

$(document).ready(function(){
    $('#example').sweetCarousel({
      slides: [
            {
                caption: "1400 x 800",
                image: 'http://placehold.it/1400x800'
            },
            {
                caption: "1200 x 700",
                image: 'http://placehold.it/1200x700'
            },
            {
                caption: "1000 x 600",
                image: 'http://placehold.it/1000x600'
            },
            {
                caption: "800 x 500",
                image: 'http://placehold.it/800x500'
            },
            {
                caption: "600 x 400",
                image: 'http://placehold.it/600x400'
            }
        ]
    });
});

Live Demo: http://jonep.com/sweetCarousel
Browser Support

– Google Chrome
– Safari
– Internet Explorer ( 9, 10, 11 )
– Firefox

Feedback

If you discover any issues or have questions regarding usage, please send a message to jonep@jonep.com or find me on twitter @jdp.

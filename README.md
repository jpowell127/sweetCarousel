## Synopsis

Sweet Carousel is a free jQuery plugin that lets you create beautiful responsive image carousels! A sweet set of images has been provided for your convenience served up from the Amazon CloudFront. For easy customization, you can also pass in your own images

## Installation

Include the latest version of jquery and jquery.sweetCarousel.min.js just before the closing body tag in your HTML document:

```html
<script src="js/jquery.min.js"></script>  
<script src="js/jquery.sweetCarousel.min.js"></script>
```

## How to Use

Create a div in your HTML document with any ID you would like to use (#example used for demonstration only) and then pass that div to .sweetCarousel() as shown below. Sweet Carousel takes care of the rest.

## Syntax Example

```javascript
$(document).ready(function(){
    $('#example').sweetCarousel();
});
```

## Custom Parameters

Sweet carousel comes with a defualt set of images served up via Amazon CloudFront along with a default set of captions but you can provide your own by passing in an array of slides as shown below. Make sure all of your images are the exact same size and don't forget to pass in the width of your images. You can also pass in an option to include a border as shown below. Sweet Carousel takes care of the rest. How sweet is that?

```javascript
$(document).ready(function(){
    $('#example').sweetCarousel({
  		slides: [
            {
                caption: "Fill Murray",
                image: 'http://fillmurray.com/600/200'
            },
            {
                caption: "Nice Nice JPG",
                image: 'http://nicenicejpg.com/600/200'
            },
            {
                caption: "Place Cage Calm",
                image: 'http://www.placecage.com/600/200'
            },
            {
                caption: "Place Cage Gray",
                image: 'http://www.placecage.com/g/600/200'
            },
            {
                caption: "Place Cage Crazy",
                image: 'http://www.placecage.com/c/600/200'
            },
            {
                caption: "Place Sheen",
                image: 'http://placesheen.com/600/200'
            }
        ],
        width:600,
        border:'yes'
    });
});
```

## Live Demo

http://jonep.com/sweetCarousel

## Browser Support

– Google Chrome

– Safari

– Internet Explorer ( 9, 10, 11 )

– Firefox


## Feedback

If you discover any issues or have questions regarding usage, please send a message to jonep@jonep.com or find me on twitter @jdp.

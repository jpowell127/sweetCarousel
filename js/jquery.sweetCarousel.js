(function($) {
    // Ajax request to load, compile, and append Handlebars template to the DOM
    function getTemplateAjax(path,data,div) {
        var template;

        $.ajax({
            url: path,
            cache: true,
            success: function(result) {
                template  = Handlebars.compile(result);
                $(div).html(template(data));
            }
        }).done(function( msg ) {

			var carouselUL = $(div).children('ul'),
				imgs = carouselUL.find('img'),
				imgWidth = 256,
				imgsLen = imgs.length,
				current = 1,
				totalImgsWidth = imgsLen * imgWidth;

				console.log(imgWidth)

			$('#carousel-nav').find('button').on('click', function() {
				var direction = $(this).data('dir'),
					loc = imgWidth;

				( direction === 'next' ) ? ++current : --current;

				if ( current === 0 ) {
					current = imgsLen;
					loc = imgWidth - totalImgsWidth;
					direction === 'next';
				} else if ( current - 1 === imgsLen ) {
					current = 1;
					loc = 0;
				}

				transition(carouselUL, loc, direction);
			});

			function transition( container, loc, direction ) {
				var unit;

				if ( direction && loc !== 0 ) {
					unit = ( direction === 'next' ) ? '-=' : '+=';
				}

				container.animate({
					'margin-left': unit ? (unit + loc) : loc
				});
			} 			
		});       
    }

    // Append Stylesheet to head
    function appendStylesheet() {
        $("head").append("<link rel='stylesheet' href='/css/sweetCarousel.css'>");
    }

    // Putting our plugin in the sweetCarousel Namespace
    $.fn.sweetCarousel = function( options ) {
    	var div = this;
    	// override defaults with passed in options
        var opts = $.extend( {}, $.fn.sweetCarousel.defaults, options );

        appendStylesheet();
        getTemplateAjax('js/templates/sweetCarousel.html', opts, div);
    };

    // create some defaults
    $.fn.sweetCarousel.defaults = {
         slides: [
            {
                caption: "Chocolate Cake 1",
                image: 'http://dzmgxxm1t5tb7.cloudfront.net/chocolate_cake_01.png'
            },
            {
                caption: "Chocolate Cake 2",
                image: 'http://dzmgxxm1t5tb7.cloudfront.net/chocolate_cake_02.png'
            },
            {
                caption: "Chocolate Cake 3",
                image: 'http://dzmgxxm1t5tb7.cloudfront.net/chocolate_cake_03.png'
            },
            {
                caption: "Chocolate Cake 4",
                image: 'http://dzmgxxm1t5tb7.cloudfront.net/chocolate_cake_04.png'
            },
            {
                caption: "Chocolate Cake 5",
                image: 'http://dzmgxxm1t5tb7.cloudfront.net/chocolate_cake_05.png'
            },
            {
                caption: "Chocolate Cake 6",
                image: 'http://dzmgxxm1t5tb7.cloudfront.net/chocolate_cake_06.png'
            }
        ]
    };

}(jQuery));	
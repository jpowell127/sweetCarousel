(function($) {

    // Putting our plugin in the sweetCarousel Namespace
    $.fn.sweetCarousel = function( options ) {
        var div = this;
        // Override defaults with passed in options
        var opts = $.extend( {}, $.fn.sweetCarousel.defaults, options );
        // Append Stylesheet to head
        $("head").append("<link rel='stylesheet' href='css/sweetCarousel.css'>");
        // Pass Options to Template
        getAndBindTemplate(opts, div);
    };

    // Create some defaults for carousel
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
        ],
        width:256,
        border:'no'
    };

    // Ajax request to load, bind, and append Handlebars template
    function getAndBindTemplate(data,div) {
        $.ajax({
            url: 'js/templates/sweetCarousel.html',
            cache: true,
            success: function(result) {
                // Bind Data to template
                var template = Handlebars.compile(result);
                $(div).html(template(data));
            },
            dataType: "text"
        }).done(function() {
            initCarousel(data);
		});
    }

    // Initialize carousel
    function initCarousel(data) {
        // Add max-width to carousel and fade in
        $('.sweetCarousel').css('max-width', data.width).delay(500).fadeIn();
        
        // Add Border if option passed in
        if(data.border === 'yes'){
            $('.sweetCarousel').css({
                'border':'5px solid #FFF',
                '-webkit-box-shadow':'1px 1px 3px 2px rgba(50, 50, 50, 0.45)',
                '-moz-box-shadow':'1px 1px 3px 2px rgba(50, 50, 50, 0.45)',
                'box-shadow':'1px 1px 3px 2px rgba(50, 50, 50, 0.45)',
                'border-radius':'3px',
                'margin':'5px'
            });
        }

        // Keep track of current slide
        var counter = 0,
            // Collection of all of the slides
            $items = $('.sweetCarousel figure'),
            // Total number of slides
            numItems = $items.length;
            // Show first slide
            $items.first().addClass('show');

        // Cycles the slides
        var showCurrent = function() {
            var itemToShow = Math.abs(counter%numItems);
            $items.removeClass('show');
            $items.eq(itemToShow).addClass('show');
        };

        // Add click events to prev & next buttons 
        $('.sweetCarousel .next').on('click', function() {
            counter++;
            showCurrent();
        });
        $('.sweetCarousel .prev').on('click', function() {
            counter--;
            showCurrent();
        });
    }

}(jQuery));
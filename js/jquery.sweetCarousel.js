(function($) {
    // Ajax request to load, compile, and append Handlebars template to the DOM
    function getTemplateAjax(path,data) {
        var template;

        $.ajax({
            url: path,
            cache: true,
            success: function(result) {
                template  = Handlebars.compile(result);
                $('#mySweetCarousel').html(template(data));
                $(".item").first().addClass("active");
                $(".carousel-indicators li").first().addClass("active");
            }
        });
    }

    // Append Stylesheets to head
    function appendStylesheets() {
        var stylesheets = [
            "<link rel='stylesheet' href='/css/bootstrap.min.css' type='text/css' media='screen'>",
            "<link rel='stylesheet' href='/css/carousel.css' type='text/css' media='screen'>"
        ];
        $.each(stylesheets,function() {
            $("head").append(this);
        });
    }

    // Putting our plugin in the sweetCarousel Namespace
    $.fn.sweetCarousel = function( options ) {
        var opts = $.extend( {}, $.fn.sweetCarousel.defaults, options );

        appendStylesheets();
        getTemplateAjax('js/templates/sweetCarousel.html', opts);

/*        $('#sweetCarousel').carousel({
            interval: 1000
        });*/

    };

    // create some defaults
    $.fn.sweetCarousel.defaults = {
         slides: [
            {
                caption: "Space Invaders: Press Start",
                image: 'http://dzmgxxm1t5tb7.cloudfront.net/invader.jpg'
            },
            {
                caption: "Space Invaders: Full Invasion",
                image: 'http://dzmgxxm1t5tb7.cloudfront.net/full_invasion.jpg'
            },
            {
                caption: "Pac Man",
                image: 'http://dzmgxxm1t5tb7.cloudfront.net/pacMan.jpg'
            },
            {
                caption: "Radiant 1",
                image: 'http://dzmgxxm1t5tb7.cloudfront.net/radiant1.jpg'
            },
            {
                caption: "Radiant 2",
                image: 'http://dzmgxxm1t5tb7.cloudfront.net/radiant2.jpg'
            }
        ]
    };

}(jQuery));
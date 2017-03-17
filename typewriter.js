/**
 * Plugin   : Typewriter effect
 * Author   : Mayank Pandey
 * Date     : 2017-01-20
**/

// Custom function to decorate text - Showing characters one by one with different actions
(function ( $ ) {
    $.fn.typewriter = function( options ) {

    	var settings = $.extend({
            interval: 50,
            color: "black",
            fontSize: "10px",
            textAlign: "center"
        }, options );

        var elem 	= $(this);
        var elemTxt = null;

        $( elem ).each(function(){
        	$(this).css({
	            "color": settings.color,
	            "font-size": settings.fontSize,
	            "text-align": settings.textAlign
	        });

        	elemTxt = $(this).html().trim();
		 	
		 	// Make its text blank and show it by applying decoration
		 	$(this).html('');

		 	// Show the text by applying various decorate methods over it
		 	showText($(this), elemTxt, 0, settings.interval);

		 	return this;
        });

	    function showText (target, message, index, interval) {   
			if (index < message.length) { 
				$(target).append(message[index++]); 
				setTimeout(function () {
					showText(target, message, index, interval); 
				}, interval); 
			}

			// Custom animaton
			/*setTimeout(function() { 
		        target.animate({ fontSize: "22px" }, 1500 ).animate({ fontSize: "20px" }, 1500 );
		    }, interval);*/
		}
    };
}( jQuery ));
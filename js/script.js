var template = {
	init: function(){
		self = this;
		
		$(document).ready(function(){
			self.example();
		});
	},
	example: function(){
		if($('.example')[0]) {
			// do smth
		}
	}
}

template.init();

 $(document).ready(function() {
    $('section.main .slides').lightSlider({
        gallery:false,
        item:1,
        thumbItem:9,
        slideMargin: 0,
        speed:500,
        auto:false,
        loop:true,
        onSliderLoad: function() {
            $('section.main .slides').removeClass('cS-hidden');
        }  
    });

    if ( (window.matchMedia("(max-width: 1920px)").matches) && (window.matchMedia("(min-width: 1025px)").matches) ) {
	    $('section.projects .slides').lightSlider({
	        gallery:false,
	        item:3,
	        thumbItem:1,
	        slideMargin: 0,
	        speed:500,
	        auto:false,
	        loop:true,
	        onSliderLoad: function() {
	            $('section.main .slides').removeClass('cS-hidden');
	        }
	    });
	} else 

    if ((window.matchMedia("(max-width: 1024px)").matches) && (window.matchMedia("(min-width: 769px)").matches) ) {
    	$('section.projects .slides').lightSlider({
	        gallery:false,
	        item:2,
	        thumbItem:1,
	        slideMargin: 0,
	        speed:500,
	        auto:false,
	        loop:true,
	        adaptiveHeight:true,
	        onSliderLoad: function() {
	            $('section.main .slides').removeClass('cS-hidden');
	        }
	    });
    } else 

	if (window.matchMedia("(max-width: 768px)").matches) {
    	$('section.projects .slides').lightSlider({
	        gallery:false,
	        item:1,
	        thumbItem:1,
	        slideMargin: 0,
	        speed:500,
	        auto:false,
	        loop:true,
	        adaptiveHeight:true,
	        onSliderLoad: function() {
	            $('section.main .slides').removeClass('cS-hidden');
	        }
	    });
    }

});


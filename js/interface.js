( function($) {
  'use strict';



  	/*-------------------------------------------------------------------------------
	  Detect mobile device 
	-------------------------------------------------------------------------------*/



	var mobileDevice = false; 

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	  	$('html').addClass('mobile');
	  	mobileDevice = true;
	}

	else{
		$('html').addClass('no-mobile');
		mobileDevice = false;
	}



    /*-------------------------------------------------------------------------------
	  Window load
	-------------------------------------------------------------------------------*/



	$(window).load(function(){
		$('body').addClass('loaded');
		$('.loader').fadeOut(400);
    	var wow = new WOW({
		    offset: 200,          
		    mobile: false
		  }
		);
		wow.init();
	});

	var topPanelHeight=$('.top-panel').outerHeight();
	var navbar=$('.navbar-primary');
	var navbar2=$('.navbar-2');
	var affixPanelHeight=$('.affix').outerHeight();



	/*-------------------------------------------------------------------------------
	  Smooth scroll to anchor
	-------------------------------------------------------------------------------*/



    $('.js-target-scroll').on('click', function() {
        var target = $(this.hash);
        if (target.length) {
            $('html,body').animate({
                scrollTop: (target.offset().top - affixPanelHeight + 1)
            }, 1000);
            return false;
        }
    });



    /*-------------------------------------------------------------------------------
	  Affix
	-------------------------------------------------------------------------------*/



	navbar.affix({
	  offset: {
	    top:topPanelHeight
	  }
	});



	/* Navbar 2 Affix */


	
	navbar2.affix({
	  offset: {
	    top:10
	  }
	});

	navbar2.on('affix.bs.affix', function() {
		if (!navbar2.hasClass('affix')){
			navbar2.addClass('animated fadeInDown');
		}
	});

	navbar2.on('affix-top.bs.affix', function() {
	  	navbar2.removeClass('animated fadeInDown');
	  	$('.navbar-collapse').collapse('hide');
	});


	if (navbar2.hasClass('affix')){
		navbar2.find('.js-brand-hinge').addClass('animated hinge');
	}



	/*-------------------------------------------------------------------------------
	 Navbar collapse
	-------------------------------------------------------------------------------*/



	$('.navbar-collapse').on('show.bs.collapse', function () {
	 	navbar2.addClass('affix');
	});

	$('.navbar-collapse').on('hide.bs.collapse', function () {
		if (navbar2.hasClass('affix-top')){
			navbar2.removeClass('affix');
		}
	});

	$(".navbar-nav > li > a").on('click', function() {
	    $(".navbar-collapse").collapse('hide');
	});



	/*-------------------------------------------------------------------------------
	 Scrollspy
	-------------------------------------------------------------------------------*/



	$('body').scrollspy({
		offset:  affixPanelHeight + 1
	});



	/*-------------------------------------------------------------------------------
	  Parallax
	-------------------------------------------------------------------------------*/



	if(!mobileDevice){
		$(window).stellar({
		  	responsive: true,
		  	horizontalScrolling: false,
		  	hideDistantElements: false,
		  	horizontalOffset: 0,
		  	verticalOffset: 0
		});
	}



	/*-------------------------------------------------------------------------------
	  Background slider
	-------------------------------------------------------------------------------*/



	$(".slideshow").owlCarousel({
    	singleItem : true,
    	autoHeight:true,
    	transitionStyle : "fadeUp",
    	slideSpeed:500,
    	responsiveRefreshRate : 0,
    	addClassActive:true,
    	navigation:true,
    	navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    	autoPlay : 7000
	});



	/*-------------------------------------------------------------------------------
	  Pie chart
	-------------------------------------------------------------------------------*/



    $(window).scroll( function(){
	    $('.chart').each( function(i){
	        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
	        var bottom_of_window = $(window).scrollTop() + $(window).height();
	        if( bottom_of_window > bottom_of_object ){
		        $('.chart').easyPieChart({
		          scaleColor:false,
		          trackColor:'#ebedee',
		          barColor: function(percent) {
				    var ctx = this.renderer.getCtx();
				    var canvas = this.renderer.getCanvas();
				    var gradient = ctx.createLinearGradient(0,0,canvas.width,0);
				        gradient.addColorStop(0, "#fa4951");
				        gradient.addColorStop(1, "#febf28");
				    return gradient;
				  },
			      lineWidth:4,
			      lineCap: 'butt',
			      size:150,
		          animate:1000
		        });
	        }
	    }); 
	});



	/*-------------------------------------------------------------------------------
	  Post gallery
	-------------------------------------------------------------------------------*/



	 $(".js-post-gallery").owlCarousel({
    	singleItem : true,
    	transitionStyle : "fadeUp",
    	responsiveRefreshRate : 0,
    	pagination:false,
    	navigation:true,
    	navigationText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
    	
	});



	/*-------------------------------------------------------------------------------
	  Portfolio masonry
	-------------------------------------------------------------------------------*/



	$('.js-iso').each(function() {		
		var $container = $(this);
		$container.imagesLoaded( function(){
			$container.isotope({		 
				itemSelector: '.js-iso-item',
				percentPosition: true,
				layoutMode: 'masonry',	
				masonry: {
				  columnWidth: '.grid-sizer'
				}	
			});	
		});
    }); 


	$('.filter li').on('click', function() {
		$('.filter .active').removeClass('active');
		$(this).closest('li').addClass('active');
		var selector = $(this).attr('data-filter');
		$('.js-iso').isotope({
			filter: selector,
			animationOptions: {
				duration: 500,
				queue: false
			}
		});
		return false;
	});



	/*-------------------------------------------------------------------------------
	  Video pop-up
	-------------------------------------------------------------------------------*/



	$('.js-play').magnificPopup({
	    type: 'iframe',
	    removalDelay: 300
    });



	/*-------------------------------------------------------------------------------
	  Reviews carousel
	-------------------------------------------------------------------------------*/



	var reviewCarousel=$(".review-carousel").owlCarousel({
		singleItem:true,
	 	autoHeight : true,
	 	addClassActive:true,
    	navigation:true,
    	responsiveRefreshRate:0,
    	navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    	slideSpeed:400,
    	afterMove:function(){
    		$('.thumbnail-pagination a').removeClass('active');
    		$('.thumbnail-pagination a').eq(this.currentItem).addClass('active');
    	}
	});

	if ($(".review-carousel").size() > 0){
		setTimeout(function(){
		    reviewCarousel.data('owlCarousel').updateVars();
		},100);
	}

	

	reviewCarousel.trigger('owl.jumpTo',1);


    $('.thumbnail-pagination a').click(function (e) {
    	var index=$(this).index();
        reviewCarousel.trigger('owl.goTo', index);
        e.preventDefault();
    });

	$(".custom-next").click(function () {
        reviewCarousel.trigger('owl.next');
    });

    $(".custom-prev").click(function () {
        reviewCarousel.trigger('owl.prev');
    });



	/*-------------------------------------------------------------------------------
	  Gallery carousel
	-------------------------------------------------------------------------------*/



	$(".gallery-carousel").owlCarousel({
		singleItem:true,
	 	autoHeight : true,
	 	pagination:false,
	 	navigation:true,
	 	transitionStyle : "fadeUp",
	 	navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	});



	/*-------------------------------------------------------------------------------
	  Clients carousel
	-------------------------------------------------------------------------------*/



	$(".clients-carousel").owlCarousel({
		items:4,
	 	navigation:false
	});



	/*-------------------------------------------------------------------------------
	  Ajax Form
	-------------------------------------------------------------------------------*/



	if ($('.js-ajax-form').length) {
		$('.js-ajax-form').each(function(){
			$(this).validate({
				errorClass: 'error wobble-error',
			    submitHandler: function(form){
		        	$.ajax({
			            type: "POST",
			            url:"mail.php",
			            data: $(form).serialize(),
			            success: function() {
			                
		                },

		                error: function(){
			            	
			            }
			        });
			    }
			});
		});
	}
})(jQuery);

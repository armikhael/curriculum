/* ---------- @ Timeline -----------*/
jQuery.noConflict()(function($){
    $(window).load(function() {   
            $(function () {
                $('.timeline-item-trigger span').click(function () {
                    if ($(this).hasClass('fa fa-plus')) {
                        $(this).removeClass('fa fa-plus').addClass('fa fa-minus');
                    } else {
                        $(this).removeClass('fa fa-minus').addClass('fa fa-plus');
                    }
                });
                $('.timeline-item-title').click(function () {
                    $trigger = $(this).parent().parent().find('.timeline-item-trigger span');
                    if ($trigger.hasClass('fa fa-plus')) {
                        $trigger.removeClass('fa fa-plus').addClass('fa fa-minus');
                    } else {
                        $trigger.removeClass('fa fa-minus').addClass('fa fa-plus');
                    }
                });
            });
        });
    });

jQuery.noConflict()(function($){
        $( '.progress .bar' ).each(function() {
            var percentage = $(this).data( 'percentage' );
            $(this).append('<span class="percentage-marker">' + percentage + '&#37;</span>');
        }); 

        $( 'body' ).tooltip({
            selector: "a[data-toggle=tooltip]"
        });
});


/* ---------- @ Portfolio -----------*/
jQuery.noConflict()(function($){
$(window).load(function() {   
 $(function(){
      
      var $container = $('#portfolio');
      

                $container.isotope({
                  itemSelector : '.block',
                  layoutMode : 'masonry'
                  
                });
      
      var $optionSets = $('#options .option-set'),
          $optionLinks = $optionSets.find('a');

      $optionLinks.click(function(){
        var $this = $(this);
        // don't proceed if already selected
        if ( $this.hasClass('selected') ) {
          return false;
        }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
  
        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[ key ] = value;
        if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
          // changes in layout modes need extra logic
          changeLayoutMode( $this, options )
        } else {
          // otherwise, apply new options
          $container.isotope( options );
        }
        
        return false;
      });
      });
      
    });
});

/* ---------- @ Prettyphoto -----------*/
jQuery.noConflict()(function($){

    jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({hook: 'data-rel'});
    jQuery('a[data-rel]').each(function() {
        jQuery(this).attr('rel', $(this).attr('data-rel')).removeAttr('data-rel');
    });
    

});

/*----------- @nicescroll--------------*/
jQuery.noConflict()(function($){

    $(document).ready(function () {
        $("html").niceScroll();
    });
});

 /* ---------- @ GoogleMap ------*/
jQuery.noConflict()(function($){
var $map = $('#map-content');
    google.maps.event.addDomListener(window, 'resize', function() {
      map.setCenter(homeLatlng);
    });
    if( $map.length ) {

      $map.gMap({
        address: '9930 124th Urbanizacion Santa Maria, Los Teques',
        zoom: 15,
        scrollwheel: true,
        markers: [
          { 'address' : '9930 124th Urbanizacion Santa Maria, Los Teques',}
        ]
      });

    }
});


/* ---------- @ Contact From -----------*/

jQuery.noConflict()(function($){
$(document).ready(function ()
{ 
 $('#submit').formValidator({
    scope: '#form'
  });
  
  $('#post-commentsss').formValidator({
    scope: '#comments-form'
  });
  
  $('#submit,#post-commentsss').click(function() {
        $('input.error-input, textarea.error-input').delay(300).animate({marginLeft:0},100).animate({marginLeft:10},100).animate({marginLeft:0},100).animate({marginLeft:10},100);
    });

  // Form plugin

  var options = {

    beforeSubmit: function() {
      $('.sending').show();

    },
    success: function() {
      $('.sending').hide();
      $('#form').hide();
      $(".mess").show().html('<h5>Thanks !</h5><h5>Your message has been sent.</h5>'); // Change Your message post send
      $('.mess').delay(3000).fadeOut(function() {

        $('#form').clearForm();
        $('#form').delay(3500).show();

      });
    }
  };
  

  $('#form').submit(function() {
    $(this).ajaxSubmit(options);
    return false;
  });
    
});
});

/* ---------- @ Scroll to Top -----------*/
jQuery.noConflict()(function($){
    // Scroll to top button
    var scrollTimeout;
    
    $('a.scroll-top').click(function(){
        $('html,body').animate({scrollTop:0},500);
        return false;
    });

    $(window).scroll(function(){
        clearTimeout(scrollTimeout);
        if($(window).scrollTop()>400){
            scrollTimeout = setTimeout(function(){$('a.scroll-top:hidden').fadeIn()},100);
        }
        else{
            scrollTimeout = setTimeout(function(){$('a.scroll-top:visible').fadeOut()},100);    
    }
    });
    
});

/* ---------- @ Scroll to Section -----------*/
jQuery.noConflict()(function($){
    $("nav").find("a").click(function(e) {
        e.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top
        });
    });
});
/* ---------- @ Responsive Nav -----------*/
jQuery.noConflict()(function($){
// Create the dropdown nav for responsive
$("<select />").appendTo(".nav-collapse ");
    $("<option />", {
    "selected": "selected",
    "value"   : "",
    "text"    : "Menu"
    }).appendTo(".nav-collapse select");
    // Populate dropdown with nav items
    $(".nav-collapse a").each(function() {
    var el = $(this);
    $("<option />", {
    "value"   : el.attr("href"),
    "text"    : el.text()
    }).appendTo(".nav-collapse select");
    });
    // To make dropdown actually work
    // To make more unobtrusive: http://css-tricks.com/4064-unobtrusive-page-changer/
    $(".nav-collapse select").change(function() {
    window.location = $(this).find("option:selected").val();
});
});

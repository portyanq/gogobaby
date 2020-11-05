$(document).ready(function(){
    $('.main__slider').slick({
        arrows : true,
        dots : false,
        slidesToShow : 3,
        centerMode : true,
        variableWidth : true,
        variableHeight: true,
        infinite : false
    });
            jQuery.colorbox.settings.maxWidth  = '95%';
            jQuery.colorbox.settings.maxHeight = '95%';
             

            var resizeTimer;
            function resizeColorBox()
            {
              if (resizeTimer) clearTimeout(resizeTimer);
              resizeTimer = setTimeout(function() {
                        if (jQuery('#cboxOverlay').is(':visible')) {
                                  jQuery.colorbox.resize({width:'90%', height:'90%'})
                        }
              }, 300);
            }
             

            jQuery(window).resize(resizeColorBox);
            window.addEventListener("orientationchange", resizeColorBox, false);
            

            jQuery('a.gallery').colorbox({ opacity:0.5 , rel:'group1', loop:false });
        $(function(){
            $("a.colorbox").colorbox({current:"Фото {current} из {total}"});
        });

});

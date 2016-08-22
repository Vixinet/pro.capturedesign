$(document).ready(function($){

    function viewport() {
        var e = window, a = 'inner';
        if(!('innerWidth' in window )) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
    }

    var w=window,d=document,
    e=d.documentElement,
    g=d.getElementsByTagName('body')[0],
    x=w.innerWidth||e.clientWidth||g.clientWidth, // Viewport Width
    y=w.innerHeight||e.clientHeight||g.clientHeight; // Viewport Height


    // Slider

    var themeSlider = $('#projects-slider');
    var themeSliderItem = themeSlider.find('li');
    var themeNavArrow = $('#projects-slider > a');

    themeSliderItem.css({marginLeft: Math.round(x * 0.18)});


    if(x > 1024){
    	var i = Math.round(x * 0.4);
    }
    else if(x < 991){
        themeSliderItem.width();
    	var i = Math.round(x * 1);
    }
    else{
    	var i = Math.round(x * 0.5);
    }

	themeSliderItem.width(i);

    themeSlider.sly({
        horizontal: 1,
        itemNav: 'forceCentered',
        startAt: 1,
        activateMiddle: 1,
        smart: 1,
        activateOn: 'click',
        prev: themeSlider.find('#prev-project'),
        next: themeSlider.find('#next-project'),
        cycleBy: 'items',
        // cycleInterval: 5000,
        cycleInterval: 50000000,
        pauseOnHover: 1,
        mouseDragging: 1,
        touchDragging: 1,
        releaseSwing:  1,
        speed: 500,
        scrollBy: 0,
        elasticBounds: 1,
        easing: 'easeInOutQuart',
        keyboardNavBy: 'items'
    },
    {
        active: function() {
            
        },
        moveStart: function() {
            themeNavArrow.css({opacity: 0})
        },
        moveEnd: function() {
            themeNavArrow.css({opacity: 1});
            themeSlider.css({opacity: 1});
        }
    });

    $('.projects a.fancybox-trigger').fancybox({
        'transitionIn'  :   'elastic',
        'transitionOut' :   'elastic',
        'speedIn'       :   600,
        'speedOut'      :   200,
        'overlayShow'   :   false,
        helpers:  {
            title:  null
        },
        afterShow: function() {
            var o = $(this.inner).find('.fancybox-dc-overlay');
            var i = $(this.inner).find('.fancybox-dc-image');
            o.hide()
            .width(i.width())
            .height(i.height())
            .show()
            .click(function() {
                o.hide()
            })
        },
        beforeClose: function() {
            themeNavArrow.css({opacity: 1});
        }
    });

    $('#projects-slider').on('click', '.ov-open, .ov-close', function(event) {
        event.preventDefault();
        $(this).closest('li').find('.ov-open, .overlay').toggle();
        themeNavArrow.css({opacity: 1});
    });
    
    var BLOG_API = "http://blog.capturedesign.pro/wp-json/wp/v2";

    $.ajax({
        url: BLOG_API + '/posts?context=view&per_page=3',
        dataType: 'json',
        success: function(data) {
            var promises = [];

            $(data).each(function(i, o) {
                var ajax = $.ajax({
                    url: BLOG_API + '/media/' + o.featured_media,
                    success: function(o) {
                        var img = new Image()
                        img.src = o.source_url;
                        img.onload = function() {
                            $(img).fadeIn(1500);
                        };
                        $('.wp-posts .post[media-id="'+o.id+'"]').append($(img).hide());
                        
                        
                    }
                });
                promises.push(ajax);
                $('.wp-posts').append($('<a data-id="'+o.id+'" href="'+o.link+'" target="_blank" class="post" media-id="'+o.featured_media+'"></a>'));
            });

            $.when(promises).then(function(result) {
                $('.wp-posts .loader').remove();
                
            });

            
        }
    })
});

$(window).resize(function(){

    function viewport() {
        var e = window, a = 'inner';
        if(!('innerWidth' in window )) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
    }

    var w=window,d=document,
    e=d.documentElement,
    g=d.getElementsByTagName('body')[0],
    x=w.innerWidth||e.clientWidth||g.clientWidth, // Viewport Width
    y=w.innerHeight||e.clientHeight||g.clientHeight; // Viewport Height

    // Global Vars

    var body = $('body');
    var $window = $(window);
    var wScrollTop = $window.scrollTop();

    // Theme slider

    var themeSlider = $('#projects-slider');

    if(themeSlider.length){

        var themeSliderItem = themeSlider.find('li');

        themeSliderItem.css({marginLeft: Math.round(x * 0.18)});

        if(x > 1024){
            themeSliderItem.width(Math.round(x * 0.4));
        }
        else if(x < 991){
            themeSliderItem.width(Math.round(x * 1));
        }
        else{
            themeSliderItem.width(Math.round(x * 0.5));
        }

        themeSlider.sly('reload');
    }

}); // End Window Resize
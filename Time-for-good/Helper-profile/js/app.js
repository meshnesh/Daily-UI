$(document).foundation(); 
$(document).ready(function() {
        $('.viewport').mouseenter(function(e) {
            $(this).children('a').children('img').animate({ height: '299', left: '0', top: '0', width: '450'}, 100);
            $(this).children('a').children('span').fadeIn(200);
        }).mouseleave(function(e) {
            $(this).children('a').children('img').animate({ height: '332', left: '-20', top: '-20', width: '500'}, 100);
            $(this).children('a').children('span').fadeOut(200);
        });
    });
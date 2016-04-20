document.addEventListener("touchstart", function () {}, true);
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body);
    }, false);
}
if (window.navigator.standalone == true) {
    // My app is installed and therefore fullscreen
    alert('My app is installed and therefore fullscreen')
}

//Off Canvas Logic
function OffCanvas() {
    var position = 0;
    var mainPanel = document.getElementById("mainPanel");
    var leftDrawer = document.getElementById("leftDrawer");
    var rightDrawer = document.getElementById("rightDrawer");

    function toggle(evt) {
        position++;
        if (position % 3 === 0) {
            leftDrawer.classList.remove("open");
            rightDrawer.classList.remove("open");
        } else if (position % 3 == 1) {
            leftDrawer.classList.add("open");
            rightDrawer.classList.remove("open");
        } else {
            leftDrawer.classList.remove("open");
            rightDrawer.classList.add("open");
        }
    }

    mainPanel.addEventListener("click", toggle);
    leftDrawer.addEventListener("click", toggle);
    rightDrawer.addEventListener("click", toggle);
}

///var oc = new OffCanvas();

var offcanvasOptions = {};
var offcanvasElement = document.querySelector('.offcanvas');
var offcanvasLeftElement = document.querySelector('.offcanvas__left');
var offcanvasRightElement = document.querySelector('.offcanvas__right');

function toggleOffcanvas(e, target) {
    console.log('toggleOffCanvas', e);
    var $el = $(e);
    var $target = $(target);



    var openClass = target.replace('.', '') + '--is-open';
    console.log('openCLass', openClass);

    $el
        .toggleClass(openClass)
        .on('click', function (e) {
            $(this).removeClass(openClass)
        });

}

$(function () {

    var hammertime = new Hammer(offcanvasElement, offcanvasOptions);
    hammertime.on('swipeleft swiperight', function (e) {
        console.log(e);
        if (e.type === 'swiperight') {
            toggleOffcanvas(offcanvasLeftElement, '.offcanvas_left');
        }
        if (e.type === 'swipeleft') {
            toggleOffcanvas(offcanvasRightElement, '.offcanvas_right');
        }
    });

    $('html').addClass('js');

    $('.box').addClass('layout__item');


    $('.btn-debug').bind('click', function (e) {
        $('html').toggleClass('debug');
    });


    $('.box h3').css({
        cursor: 'pointer'
    }).bind('click', function (e) {
        $(this).next().slideToggle();
    });

    $('.offcanvas__toggle').bind('click', function (e) {
        //  		toggleOffcanvas(e, );
        var target = $(e.currentTarget).attr('data-target');
        console.log('Toggle', target);
        $(target).toggleClass('is-open');
    });

    var $log = $('#log');
    var h, w;
    $(window).on('resize', function (e) {
        h = e.target.innerHeight;
        w = e.target.innerWidth;
        $log.text(w + 'x' + h);
        console.log('resize', e);
    });
})
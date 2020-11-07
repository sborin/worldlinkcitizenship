jQuery(document).ready(function ($) {

    $('#header').on('click', '.scroll', function (event) {
        event.preventDefault();

        var hash = this.hash;
        var id = hash.split('#')[1];
        EPPZScrollTo.scrollVerticalToElementById(id, 0);
    });

    /*
     * check whether slide image should
     * be change or not
     */
    var totalSlideImg = $('ul#slider li').length;
    if (totalSlideImg == 1) {

        var images = ['/images/photo2.png', '/images/photo4.png'];
        var index = 0;

        window.setInterval(function() {
            $('.slider-img').children().attr('src', images[index]);
            //increment data array id
            index++;

            //repeat from start
            if (index == 2) {
                index = 0;
            }
        }, 10000);
    }
});

addEventListener('load', function () {
    setTimeout(hideURLbar, 0);
}, false);
function hideURLbar() {
    window.scrollTo(0, 1);
}

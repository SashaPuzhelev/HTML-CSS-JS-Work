$(function() {
    var pull = $('#pull');
    menu = $('nav ul');
    menuHeight = menu.height();
    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
});
$(window).resize(function() {
    var windowWidth = $(window).width();
    if (windowWidth > 320 && menu.is(':hidden')){
        menu.removeAttr('style');
    }
})
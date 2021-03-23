function leftClick() {
    
    var currentImg = $('.active');
    var prevImg = currentImg.prev('img');

    var focusedCircle = $('.focused');
    var prevCircle = focusedCircle.prev('a');

    if (currentImg.hasClass('first') && focusedCircle.hasClass('first')) {
        var prevImg = $('img.last');
        var prevCircle = $('a.last');
    }

    currentImg.toggleClass('active');
    prevImg.toggleClass('active');

    focusedCircle.toggleClass('focused');
    prevCircle.toggleClass('focused');

    console.log(currentImg, prevImg);
}

function rightClick() {

    var currentImg = $('.active');
    var nextImg = currentImg.next('img');

    var focusedCircle = $('.focused');
    var nextCircle = focusedCircle.next('a');

    if (currentImg.hasClass('last') && focusedCircle.hasClass('last')) {
        var nextImg = $('img.first');
        var nextCircle = $('a.first');
    }
    
    currentImg.toggleClass('active');
    nextImg.toggleClass('active');

    focusedCircle.toggleClass('focused');
    nextCircle.toggleClass('focused');
}

function dropdownShow() {
    $(this).find('.dropdown').show();
}

function dropdownHide() {
    $(this).find('.dropdown').hide();
}

function init() {

    $('.hamburger_menu').mouseenter(dropdownShow);
    $('.hamburger_menu').click(dropdownHide);

    $('.right').click(rightClick);
    $('.left').click(leftClick);
}

$(document).ready(init);
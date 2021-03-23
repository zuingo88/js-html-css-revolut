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

function dropdownShowOne() {

    var hideDd = $(this).find('.dropdown');
    hideDd.show();
    console.log(this);
}

function dropdownHideOne() {

    $('#dropOne').hide();
}

function init() {

    $('.hamburger').mouseenter(dropdownShowOne);
    $('#hambOne').click(dropdownHideOne);


    $('.right').click(rightClick);
    $('.left').click(leftClick);
}

$(document).ready(init);
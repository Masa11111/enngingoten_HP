$(".nav_btn").on('click', function() {
    $(this).toggleClass('active')
    $('.circle_bg').toggleClass('circleactive')
    $('#g-nav').toggleClass('panelactive')
})
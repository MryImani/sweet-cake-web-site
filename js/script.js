window.addEventListener('load', () => document.querySelector('.preloader').classList.add('loaded'));
$(window).scroll(function() {
    if ($(this).scrollTop()>300)
     {
        $('#btn-top').show(1000);
     }
    else
     {
      $('#btn-top').hide(1000);
     }
 });
$(document).ready(function () {
    $('.preloader').addClass('loaded');
    $('.nav-link').click(function () {
        $(this).addClass('active');
        $(this).parent().siblings().children().removeClass('active');
    })

    // $('span.navbar-toggler-icon').click(function () {
    //     $('.navbar-box-icon').children().children('i').css('visibility', ' hidden');
    // })
    // $('span.navbar-toggler-icon').mouseleave(function () {
    //     $('.navbar-box-icon').children().children('i').css('visibility', 'visible');
    // })
    $('.bd-example-modal-xl').modal();
    $('.offer-section-card').mouseenter(function () {

        $(this).children().children().children().children('.card-link').css({
            color: '#c14679',
            border: '2px solid #c14679'
        });
        $(this).children().children('.offer-image').css('border', 'none');

    })
    $('.offer-section-card').mouseleave(function () {

        $('.card-link').css({
            color: '#151515',
            border: 'none',
            borderBottom: '2px solid #777777'
        });
        $('.offer-image').css('border', '1px solid #dee2e6');

    })

    $(' .proc-section-card').mouseenter(function () {
        $(this).children().children('.proc-section-icons ').css('display', 'block');
        $(this).children().children().children('.proc-section-icon-search').fadeIn(500);
        $(this).children().children().children('.proc-section-icon-shopping-cart').fadeIn(800);

    })
    $(' .proc-section-card').mouseleave(function () {
        $('.proc-section-icons').css('display', 'none');
        $('.proc-section-icon-search').hide();
        $('.proc-section-icon-shopping-cart').hide();
    })
    $('.carousel').carousel({
        interval: 10000
    });
})
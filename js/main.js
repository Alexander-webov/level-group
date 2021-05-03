$(function () {
    /*
    * слайдер header
    */
    // Элемент, куда вы хотите записать страницы
    let pages = $('.header-slider__info');
    // Элемент слайдера
    let slider = $('.header-slider');

    slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {

        let i = (currentSlide ? currentSlide : 0) + 1;
        pages.text('0' + i + '/0' + slick.slideCount);
    });

    $('.header-slider').slick({
        infinite: true,
        prevArrow: '<a class="prevArrow btn-arrow"><img src="./img/arrow-next.png" alt="вперед"></a>',
        nextArrow: '<a class="nextArrow btn-arrow"><img src="./img/arrow-prev.png" alt="назад"></a>',
    });
    /*
    * слайдер section team
    */

    $('.team-slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        prevArrow: '<a href="" class="team-btn-arrow team-prevArrow"><img src="./img/left-arrow.png" alt="вперед"></a>',
        nextArrow: '<a href="" class="team-btn-arrow team-nextArrow"><img src="./img/right-arrow.png" alt="вперед"></a>',
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 880,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    /*
    * слайдер section clients
    */

    //top slider
    $('.client-slider__top').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: '<a class="client-prevArrow client-btn-arrow"><img src="./img/clients/dark-arrow-prev.png" alt="вперед"></a>',
        nextArrow: '<a class="client-nextArrow client-btn-arrow"><img src="./img/clients/dark-arrow-next.png" alt="назад"></a>',
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 940,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 681,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    //bottom slider
    $('.client-slider__bottom').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: '<a class="client-prevArrow client-btn-arrow"><img src="./img/clients/dark-arrow-prev.png" alt="вперед"></a>',
        nextArrow: '<a class="client-nextArrow client-btn-arrow"><img src="./img/clients/dark-arrow-next.png" alt="назад"></a>',
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 940,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 681,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    var men = true;

    $("#sandwich").click(function () {
        if (men == false) {
            $(".menu").slideUp();
            men = !men;
        }
        else {
            $(".menu").slideDown();
            men = !men;
        }
    });

    $("#sandwich, .menu_item").click(function () {
        $("#sandwich").toggleClass("active");
    });


});
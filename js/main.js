$(document).ready(function () {
    $('.banner_slider').slick({
        infinite: true,
        prevArrow: `<div class="btn_slide btn_slide_prev"></div>`,
        nextArrow: `<div class="btn_slide btn_slide_next"></div>`,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    dots: false,
                },
            },
        ],
    });

    $('.slider_rooms_info').slick({
        infinite: true,
        prevArrow: `<div class="btn_slide btn_slide_prev"></div>`,
        nextArrow: `<div class="btn_slide btn_slide_next"></div>`,
        slidesToShow: 1,
        fade: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                },
            },
        ],
    });

    $('.slide_room_img').slick({
        infinite: true,
        prevArrow: `<div class="btn_slide btn_slide_prev"></div>`,
        nextArrow: `<div class="btn_slide btn_slide_next"></div>`,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $('.slider_three_images').slick({
        infinite: true,
        fade: true,
        prevArrow: `<div class="btn_slide btn_slide_prev"></div>`,
        nextArrow: `<div class="btn_slide btn_slide_next"></div>`,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    fade: false,
                    dots: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    fade: false,
                    dots: true,
                },
            },
        ],
    });

    $('.slider_entertainment').slick({
        infinite: true,
        prevArrow: `<div class="btn_slide btn_slide_prev"></div>`,
        nextArrow: `<div class="btn_slide btn_slide_next"></div>`,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    dots: true,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                },
            },
        ],
    });

    $('.slider_testimonials').slick({
        infinite: true,
        prevArrow: `<div class="btn_slide btn_slide_prev"></div>`,
        nextArrow: `<div class="btn_slide btn_slide_next"></div>`,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    dots: true,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                },
            },
        ],
    });

    $('.section_all_rooms .slider_room').slick({
        infinite: true,
        prevArrow: `<div class="btn_slide btn_slide_prev"></div>`,
        nextArrow: `<div class="btn_slide btn_slide_next"></div>`,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    dots: true,
                },
            },
        ],
    });
});

// adaptive block
const horizontalImg = document.querySelectorAll('.horizontal_img');
const imgFirst = document.querySelectorAll('.img_first');
const imgSecond = document.querySelectorAll('.img_second');
const videoBlockImg = document.querySelectorAll('.video_block .wrap_img');
const roomBlock = document.querySelectorAll('.review_another_rooms .wrap_img');
const newsImg = document.querySelectorAll('.section_news .wrap_img');
const whyUsImg = document.querySelectorAll('.section_why_us .wrap_img img');
const sliderRoom = document.querySelectorAll('.section_all_rooms .slider_room');
const blockquoteImg = document.querySelectorAll('.section_blockquote .block_img');

if (window.innerWidth < 1700) {
    adaptiveBlock(imgFirst, 0.8);
}

if (window.innerWidth > 1200) {
    adaptiveBlock(horizontalImg, 1.36);
    adaptiveBlock(imgSecond, 0.74);
} else if (window.innerWidth > 768) {
    adaptiveBlock(horizontalImg, 1.1);
}

if (window.innerWidth < 992) {
    adaptiveBlock(sliderRoom, 0.65);
}

if (window.innerWidth < 992) {
    adaptiveBlock(blockquoteImg, 0.7);
}

adaptiveBlock(videoBlockImg, 0.67);
adaptiveBlock(roomBlock, 0.8);
adaptiveBlock(newsImg, 0.75);
adaptiveBlock(whyUsImg, 0.75);

function adaptiveBlock(nameBlock, relative) {
    if (nameBlock.length > 0) {
        for (let i = 0; i < nameBlock.length; i++) {
            const blockWidth = nameBlock[i].offsetWidth;
            const blockHeight = blockWidth * relative;
            nameBlock[i].style.height = `${blockHeight}px`;
        }
    }
}

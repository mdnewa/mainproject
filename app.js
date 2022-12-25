$(function(){
    $('.banner_slider').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:1000,
        speed:2000,
        dots:true,
        dotsClass:'banner_slider_dots'
    })
})

$(function(){
    $('.product_slider').slick({
        // autoplay:true,
        // autoplaySpeed:800,
        // speed:2000,
        slidesToShow:4,
        slidesToScroll:4,
        prevArrow:'<i class="fa-solid fa-chevron-left product_slider_arrows" id="prevArrow"></i>',
        nextArrow:'<i class="fa-solid fa-chevron-right product_slider_arrows" id="nextArrow"></i>'
    })
})
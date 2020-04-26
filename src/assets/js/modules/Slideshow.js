import Swiper from 'swiper';

export default class Slideshow {

    constructor(options) {

        if($('.prevent_slider').length != 1){
            this.setupSwiper()
        }
        
    }


    setupSwiper() {
        this.swiperHome = new Swiper('.slideshow_wrapper', {
            speed: 530,
            spaceBetween: 0,
            autoplay: {
                delay: 22000,
            },
            loop: true,
            loopedSlides: 2,
            navigation: {
                prevEl: '.nav_left',
                nextEl: '.nav_right'
            }
        })
    }
}

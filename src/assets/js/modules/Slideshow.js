import Swiper from 'swiper';

export default class Slideshow {

    constructor(options) {

        this.delay = 0

        if ($('.prevent_slider').length != 1) {
            if(document.getElementById('home') != null){
                this.delay = 22000
            }else{
                this.delay = 4000
            }

            this.setupSwiperSection()
        }

        if (document.getElementsByClassName('slideshow_paragraph') != null) {
            this.setupSwiperParagraph()
        }
    }


    setupSwiperSection() {

        console.log(this.delay);
        this.swiperSection = new Swiper('.slideshow_wrapper', {
            speed: 530,
            spaceBetween: 0,
            autoplay: {
                delay: this.delay,
            },
            loop: true,
            loopedSlides: 2,
            navigation: {
                prevEl: '.nav_left',
                nextEl: '.nav_right'
            }
        })
    }

    setupSwiperParagraph() {
        this.swiperParagraph = new Swiper('.slideshow_paragraph', {
            speed: 530,
            spaceBetween: 50,
            autoplay: {
                delay: 22000,
            },
            loop: true,
            loopedSlides: 2,
            navigation: {
                prevEl: '.nav_left_paragraph',
                nextEl: '.nav_right_paragraph'
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: (index, className) => {
                    return '<div class="bullet ' + className + '"></div>'
                }
            }
        })
    }
}

import ScrollTo from 'scroll-animate-to'
import { TweenMax, Bounce, Power2, TimelineMax } from 'gsap'

export default class Scrollto {

    constructor(options) {

       this.setupScroll()

       this.blinkScroll()
        
    }


    setupScroll(){
        
        if(document.getElementById('somos') != null){
            let scrollSomos = new ScrollTo({
                target: document.getElementById('somos'),
                animationFn: 'easeOut',
                duration: 680
            })
            $('#somos_btn').on('click', ()=>{
                scrollSomos.scroll()
            })
        }

        
        let scrollSection = new ScrollTo({
            target: document.querySelector('.section_content'),
            animationFn: 'easeOut',
            duration: 680
        })
        $('.scroll_icon').on('click', ()=>{
            scrollSection.scroll()
        }) 
    }


    blinkScroll(){
        this.blTL = new TimelineMax({repeat:-1, repeatDelay:5})
        this.blTL.add(TweenMax.from('#pscroll-3', .5, {alpha:0, y:-10, ease:Power1.easeOut}))
        this.blTL.add(TweenMax.from('#pscroll-2', .5, {alpha:0, y:-10, ease:Power1.easeOut}), .1)
        this.blTL.add(TweenMax.from('#pscroll-1', .5, {alpha:0, y:-10, ease:Power1.easeOut}), .2)
    }


}

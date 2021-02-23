import { TimelineMax, Power2, TweenMax, Power1 } from "gsap";
import MorphSVGPlugin from '../lib/MorphSVGPlugin.js';
import animateScrollTo from 'animated-scroll-to';

export default class Menu {
    constructor() {
        
        

        if (window.innerWidth < 768) {
            
            this.setMenuCardTL()
            this.bindEvents()

            console.log('pasa');

            TweenMax.set('.close_menu', { autoAlpha: 0 })
            TweenMax.set('.bgmenu', { autoAlpha: 0, x:-30 })
            TweenMax.set('.menu_name', { autoAlpha: 0, y: 10 })
            TweenMax.set('.sabrocasa', { autoAlpha: 0, y: 10, display:'none' })

            TweenMax.set('.overlaymenu', { autoAlpha: 0 })

            $('.hamburguer').css('cursor', 'pointer')
        }

        

        if($('#volverinicio').length > 0){

            $('#volverinicio').on('click', ()=>{
                animateScrollTo(0, {
                    speed: 1000
                });
            })
        }
    }


    setMenuCardTL() {
        this.menucardTL = new TimelineMax()

        this.menucardTL.add(TweenMax.to('.mail_icon', .2, { autoAlpha: 0 }), 0)
        this.menucardTL.add(TweenMax.to('.phone_icon', .2, { autoAlpha: 0 }), 0)
        this.menucardTL.add(TweenMax.to('.encasa_mobile', .2, { autoAlpha: 0 }), 0)

        this.menucardTL.add(TweenMax.to('.overlaymenu', .3, { autoAlpha: 1 }), .1)

        this.menucardTL.add(TweenMax.to('.bgmenu', .1, { autoAlpha: 1 }), .1)
        this.menucardTL.add(TweenMax.to('#bgmenucard_small', .8, { morphSVG: '#bgmenucard', x:0, ease:Power2.easeInOut }), .1)

        this.menucardTL.add(TweenMax.to('.logo_sabro', .7, { left: '48%', ease: Power1.easeInOut }), .2)

        this.menucardTL.add(TweenMax.to('.open_menu', .7, { autoAlpha: 0 }), .2)
        this.menucardTL.add(TweenMax.to('.close_menu', .7, { autoAlpha: 1 }), .4)

        this.menucardTL.add(TweenMax.staggerTo('.menu_name', .4, { y: 0, autoAlpha: 1 }, .04), .4)

        this.menucardTL.add(TweenMax.to('.sabrocasa', .4, { y: 0, x:0, autoAlpha: 1 }), .5)

        
        
        this.menucardTL.add(TweenMax.staggerTo('.subMenuBtn', .4, { y: 0, autoAlpha: 1 }, .04), .4)
        
        this.menucardTL.pause()
    }


    bindEvents() {
        $('.open_menu').on('click', (e) => {

            TweenMax.delayedCall(.2, () => {
                $('.menu_name').css('display', 'block')
                TweenMax.set('.sabrocasa', { display:'block' })
            })

            this.menucardTL.restart()
        })
        $('.close_menu').on('click', (e) => {
            this.menucardTL.reverse()

            TweenMax.delayedCall(.5, () => {
                $('.menu_name').css('display', 'none')
                TweenMax.set('.sabrocasa', { display:'none' })
            })
            
        })

        
    }


}
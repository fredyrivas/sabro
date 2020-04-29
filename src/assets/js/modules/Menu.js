import { TimelineMax, Power2, TweenMax, Power1 } from "gsap";
import MorphSVGPlugin from '../lib/MorphSVGPlugin.js';

export default class Menu {
    constructor() {
        
        if (APP.isMobileDevice) {
            this.setMenuCardTL()
            this.bindEvents()

            TweenMax.set('.close_menu', { autoAlpha: 0 })
            TweenMax.set('.bgmenu', { autoAlpha: 0 })
            TweenMax.set('.menu_name', { autoAlpha: 0, y: 10 })
        }
    }


    setMenuCardTL() {
        this.menucardTL = new TimelineMax()

        this.menucardTL.add(TweenMax.to('.mail_icon', .2, { autoAlpha: 0 }), 0)
        this.menucardTL.add(TweenMax.to('.phone_icon', .2, { autoAlpha: 0 }), 0)

        this.menucardTL.add(TweenMax.to('header', .3, { height: '100%' }), .1)

        this.menucardTL.add(TweenMax.to('.bgmenu', .3, { autoAlpha: 1 }), .1)
        this.menucardTL.add(TweenMax.to('#bgmenucard_small', .3, { morphSVG: '#bgmenucard' }), .1)

        this.menucardTL.add(TweenMax.to('.logo_sabropollo', .7, { left: '55%', ease: Power1.easeInOut }), .2)

        this.menucardTL.add(TweenMax.to('.open_menu', .7, { autoAlpha: 0 }), .2)
        this.menucardTL.add(TweenMax.to('.close_menu', .7, { autoAlpha: 1 }), .4)

        this.menucardTL.add(TweenMax.staggerTo('.menu_name', .4, { y: 0, autoAlpha: 1 }, .04), .4)

        this.menucardTL.pause()
    }


    bindEvents() {
        $('.open_menu').on('click', (e) => {

            TweenMax.delayedCall(.2, () => {
                $('.menu_name').css('display', 'block')
            })

            this.menucardTL.restart()
        })
        $('.close_menu').on('click', (e) => {
            this.menucardTL.reverse()
        })
    }


}
import MorphSVGPlugin from '../lib/MorphSVGPlugin.js';
import { TimelineMax } from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

export default class Ondita {

    constructor(options) {

        if(!APP.isMobileDevice){
            this.handleOndita()
        }
    }


    handleOndita() {
        if ($(document).height() >= (window.innerHeight * 2)) {
            $('.swiper-wrapper').css('position', 'fixed')
            this.setOnditaTL()
            this.setScrollOndita()
        }
    }

    setOnditaTL() {
        this.onditaTl = new TimelineMax()
        this.onditaTl.to('#ondita', 5, { morphSVG: '#planicie' }, 0)
        //this.onditaTl.to('.top_section_mask', 5, { y: 20 }, 0)
    }


    setScrollOndita() {
        this.controller = new ScrollMagic.Controller();

        this.onditaScene = new ScrollMagic.Scene({
            duration: 700,
            triggerHook: .7,
            reverse: true,
            triggerElement: '.section_content'
        })
            //.addIndicators({ name: "scene" })
            .setTween(this.onditaTl)
            .addTo(this.controller)
    }
}

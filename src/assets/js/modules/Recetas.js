import { TweenMax } from 'gsap';

const Masonry = require('masonry-layout');
const imagesloaded = require('imagesloaded')
var $ = require('jquery');
imagesloaded.makeJQueryPlugin($);

export default class Recetas {

    constructor(options) {

        if($('.grid').length > 0){
            this.preloadImages()
            this.setOver()   
            this.bindEvents() 
        }    
    }


    setupMasonry() {
        var msnry = new Masonry('.grid', {
            itemSelector: '.item',
            gutter: '.gutter-sizer',
            columnWidth: '.grid-sizer',
            percentPosition: true
        });
    }

    preloadImages() {
        $('.grid-rectas-categoria').imagesLoaded()
            .done((instance) => {
                this.setupMasonry()
            })
            .progress((instance, image) => {
                
            });
    }

    setOver(){
        TweenMax.set($('.item_info'), {alpha:0})
    }

    bindEvents(){
        $('.item').on('mouseenter', (e)=>{
            TweenMax.to($(e.currentTarget).find('.item_info'), .5, {alpha:1})
        })
        $('.item').on('mouseleave', (e)=>{
            TweenMax.to($(e.currentTarget).find('.item_info'), .5, {alpha:0})
        })
    }
}

import { TweenMax } from 'gsap';

const Masonry = require('masonry-layout');
const imagesloaded = require('imagesloaded')
var $ = require('jquery');
imagesloaded.makeJQueryPlugin($);

export default class Recetas {

    constructor(options) {



        if ($('.grid').length > 0) {
            this.filterAry = []

            this.buildSelectFilter()
            this.preloadImages()

            if(!APP.isMobileDevice){
                this.setOver()
                this.bindEvents()
            }
            this.bindClick()
            
        }
    }


    setupMasonry() {
        this.msnry = new Masonry('.grid', {
            itemSelector: '.item',
            gutter: '.gutter-sizer',
            columnWidth: '.grid-sizer',
            percentPosition: true
        });
    }

    preloadImages() {
        TweenMax.set($('.grid-rectas-categoria'), {alpha:0})

        $('.grid-rectas-categoria').imagesLoaded()
            .done((instance) => {
                TweenMax.to($('.grid-rectas-categoria'), .5, {alpha:1})
                this.setupMasonry()
            })
            .progress((instance, image) => {

            });
    }

    setOver() {
        TweenMax.set($('.item_info'), { alpha: 0 })
    }

    bindEvents() {
        $('.item').on('mouseenter', (e) => {
            TweenMax.to($(e.currentTarget).find('.item_info'), .5, { alpha: 1 })
        })
        $('.item').on('mouseleave', (e) => {
            TweenMax.to($(e.currentTarget).find('.item_info'), .5, { alpha: 0 })
        })
    }

    bindClick(){
        $('#recetas_filter').on('change', (e) => {
            this.filterRecetas(e)
        })
    }

    filterRecetas(e) {
        const optionSelected = $(e.currentTarget).find("option:selected").attr('value')

        $('.item').css('display', 'block')

        if (optionSelected != 'todos') {
            $.each($('.item'), (i, item) => {

                if (optionSelected != $(item).attr('data-filter')) {
                    $(item).css('display', 'none')
                }
            })
        }

        this.msnry.layout();
    }


    buildSelectFilter() {
        $.each($('.item'), (i, item) => {

            this.filterAry.push($(item).attr('data-filter'))
        })

        let unique = this.removeDups(this.filterAry)

        let selectContent = ''

        $.each(unique, (i, name)=>{
            selectContent += '<option value="'+name+'">'+name+'</option>'
        })

        $('#recetas_filter').append(selectContent)
    }

    removeDups(names) {
        let unique = {};
        names.forEach(function (i) {
            if (!unique[i]) {
                unique[i] = true;
            }
        });
        return Object.keys(unique);
    }
}

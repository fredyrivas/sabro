export default class Menuselect {

    constructor(options) {

        this.setup()
        
        if(!APP.isMobileDevice){
            TweenMax.set("#submenu", {autoAlpha:0});
            this.setupSubmenu()
        }

    }

    setup() {
        const currentsection = $('main').attr('data-namesection')

        $.each($('.menu_name'), (i, item)=>{
        
            let itemname = $(item).attr('data-manuname')
             
            if(currentsection == itemname){
                $(item).addClass('menu_selected')
            }
        })
    }

    setupSubmenu(){
        $('#marcas_menu').on('mouseenter', () => {
            TweenMax.to("#submenu", .45, {autoAlpha:1});
        })
        $('#marcas_menu').on('mouseleave', () => {
            TweenMax.to("#submenu", .45, {autoAlpha:0});
        })
        
        
        $('#contacto_menu').on('mouseenter', () => {
            TweenMax.to("#submenu_contacto", .45, {autoAlpha:1});
        })
        $('#contacto_menu').on('mouseleave', () => {
            TweenMax.to("#submenu_contacto", .45, {autoAlpha:0});
        })
    }
}

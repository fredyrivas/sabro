export default class Menuselect {

    constructor(options) {

        this.setup()
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
}

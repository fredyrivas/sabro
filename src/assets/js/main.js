window.$ = window.jQuery = require("jquery");

import Slideshow from './modules/Slideshow.js'
import Ondita from './modules/Ondita.js'
import Menuselect from './modules/Menuselect.js'
import Recetas from './modules/Recetas.js'
import Scrollto from './modules/Scrollto.js'



const APP = window.APP || {}

const initApp = () => {
    window.APP = APP

    let isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    APP.isMobileDevice = isMobileDevice

    APP.Slideshow = new Slideshow()
    APP.Ondita = new Ondita()
    APP.Menuselect = new Menuselect()
    APP.Recetas = new Recetas()
    APP.Scrollto = new Scrollto()
}


if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
    initApp()
} else {
    document.addEventListener('DOMContentLoaded', initApp)
}
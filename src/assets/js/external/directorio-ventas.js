if($('#directorio_ventas_marca_select').length > 0){
    var estados_pollo = []

    estados_pollo[0] = ['Aguascalientes',
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d118448.92868229389!2d-102.294506!3d21.914205!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ee538187c631%3A0x65c35745f542b3fc!2sArnulfo%20M.%20Vald%C3%A9z%20286%2C%20Centro%20Comercial%20Agropecuario%2C%2020135%20Aguascalientes%2C%20Ags.%2C%20M%C3%A9xico!5e0!3m2!1ses!2sus!4v1591407208618!5m2!1ses!2sus',
        'Julio Díaz Torre 104-A Ciudad Industrial C.P. 20290 Aguascalientes, Ags.',
        '(449) 910 64 70',
        'ventas_pollo@sabro.com.mx']
    
    estados_pollo[1] = ['Guadalajara',
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d119483.78742401786!2d-103.338669!3d20.634222!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x249fefdab4523f86!2sSabroPollo%20CEDIS%20Guadalajara!5e0!3m2!1ses!2sus!4v1591479994389!5m2!1ses!2sus',
        'Prolongación Milo No. 5025 Colonia La Nogalera C.P. 44470',
        '(33) 366 613 41 Fax. (33) 366 614 50',
        'ventas_gdl@sabro.com.mx']
    
    estados_pollo[2] = ['San Luis Potosí',
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d118264.48247069913!2d-100.925353!3d22.134931!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842aa3c81a25b42b%3A0xd96f5be0958b1c7d!2sManuel%20de%20La%20Sierra%20103%2C%20Ricardo%20B.%20Anaya%201ra%20Secc%2C%20San%20Luis%2C%20S.L.P.%2C%20M%C3%A9xico!5e0!3m2!1ses!2sus!4v1591480038117!5m2!1ses!2sus',
        'Manuel de la Sierra No. 103 Col. Estrella del Oriente C.P. 78396',
        '(444) 821 31 07 Fax (444) 821 31 50',
        'ventas_slp@sabro.com.mx']
    
    estados_pollo[3] = ['Zacatecas',
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d118264.48247069913!2d-100.925353!3d22.134931!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842aa3c81a25b42b%3A0xd96f5be0958b1c7d!2sManuel%20de%20La%20Sierra%20103%2C%20Ricardo%20B.%20Anaya%201ra%20Secc%2C%20San%20Luis%2C%20S.L.P.%2C%20M%C3%A9xico!5e0!3m2!1ses!2sus!4v1591480038117!5m2!1ses!2sus',
        'Mercado de Abastos No. L-4 Secc. 1 Col. Mercado de Abastos  C.P. 98057',
        '(492) 924 69 30 Fax (492) 924 88 65',
        'ventas_zacatecas@sabro.com.mx']
    
    estados_pollo[4] = ['León',
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d119137.70985517268!2d-101.68283800000002!3d21.070528!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbfdff21b1609%3A0x3417014642506e56!2sSabroPollo%20CEDIS%20Le%C3%B3n!5e0!3m2!1ses!2sus!4v1591480084563!5m2!1ses!2sus',
        'Blvd. Hermanos Aldama No. 4235 Ciudad Industrial C.P. 37490',
        '(477) 763 64 81 y 763 64 88 Fax (477) 763 64 94',
        'ventas_leon@sabro.com.mx']
    
    estados_pollo[5] = ['Irapuato',
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d119457.50225011099!2d-101.334912!3d20.667669!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842c8087036f3007%3A0xb5fcaf06e289a664!2sDe%20La%20Animas%2C%20Las%20Animas%2C%2036587%20Irapuato%2C%20Gto.%2C%20M%C3%A9xico!5e0!3m2!1ses!2sus!4v1591480109394!5m2!1ses!2sus',
        'Cerrada de las Ánimas No. 947-A Col. Guadalupe  C.P. 36580',
        '(462) 626 45 19 Fax (462) 626 45 21',
        'ventas_irapuato@sabro.com.mx']
    
    estados_pollo[6] = ['Querétaro',
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.549739573372!2d-100.27126948508206!3d20.565595686251125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d34291ae12ef19%3A0xad9af487b91bf995!2sAv.%20del%20Marques%2C%20Quer%C3%A9taro%2C%20M%C3%A9xico!5e0!3m2!1ses!2sus!4v1591480134961!5m2!1ses!2sus',
        'Av. Del marqués No. 8-A C.P. 76246 Parque Industrial Bernardo Quintana',
        '(442) 212 16 59 Fax (442) 224 10 64',
        'ventas_queretaro@sabro.com.mx']
    
    estados_pollo[7] = ['Morelia',
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d120204.07171890842!2d-101.255953!3d19.696557!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d095390ccab77%3A0x7b04e7543748b810!2sMargarita%20Maza%20de%20Ju%C3%A1rez%20116%2C%20Ni%C3%B1o%20Artillero%2C%2058337%20Morelia%2C%20Mich.%2C%20M%C3%A9xico!5e0!3m2!1ses!2sus!4v1591480158976!5m2!1ses!2sus',
        'Margarita Maza de Juárez No. 116 Col. Felicitas del Río  C.P. 58040',
        ' (443) 316 63 00 Fax (443) 316 75 66',
        'ventas_morelia@sabro.com.mx']
    
    var estados_huevo = []
    
    estados_huevo[0] = ['Aguascalientes Centro Distribuidor de Básicos',
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d120204.07171890842!2d-101.255953!3d19.696557!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d095390ccab77%3A0x7b04e7543748b810!2sMargarita%20Maza%20de%20Ju%C3%A1rez%20116%2C%20Ni%C3%B1o%20Artillero%2C%2058337%20Morelia%2C%20Mich.%2C%20M%C3%A9xico!5e0!3m2!1ses!2sus!4v1591480158976!5m2!1ses!2sus',
        'Bodega No. 45 C.P. 20130',
        '(449) 914 19 50 Fax (449) 914 77 83',
        'ventas_huevo@sabro.com.mx']
    
    estados_huevo[1] = ['Aguascalientes Juan Escutia',
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d118475.64107418913!2d-102.273274!3d21.882063!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ee0dc058e779%3A0x1b45752725cc99e0!2sJuan%20Escutia%20302%2C%20H%C3%A9roes%2C%2020190%20Aguascalientes%2C%20Ags.%2C%20M%C3%A9xico!5e0!3m2!1ses!2sus!4v1591480198886!5m2!1ses!2sus',
        'Juan Escutia No. 302 Colonia Héroes',
        '(449) 910-64-95 (449) 970-34-30',
        '']
    estados_huevo[2] = ['Zacatecas',
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d117722.19718852427!2d-102.595674!3d22.77211!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86824e6d76be2f3b%3A0x1f59b2af9f9a89d2!2sMercado%20de%20Abastos%2C%20Zona%20A%2C%20Mecanicos%2C%2098057%20Zacatecas%2C%20Zac.%2C%20M%C3%A9xico!5e0!3m2!1ses!2sus!4v1591480222501!5m2!1ses!2sus',
        'Calle Mervcado de Abastos No. L-4 Secc. 1 Col. mercado de Abastos Zacatecas, ZAC. C.P. 98057',
        '(492) 924-69-30 (492) 924-88-65',
        'ventas_zacatecas@sabro.com.mx']
    
    
    var estados_aliamsa = []
    
    estados_aliamsa[0] = ['Alimentos Balanceados',
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d118475.01736271773!2d-102.273162!3d21.882814!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ee0dedb21627%3A0x850dba052466ed9d!2sFrancisco%20Gonz%C3%A1lez%20Bocanegra%20205%2C%20H%C3%A9roes%2C%2020190%20Aguascalientes%2C%20Ags.%2C%20M%C3%A9xico!5e0!3m2!1ses!2sus!4v1591480249739!5m2!1ses!2sus',
        'Francisco González Bocanegra No. 205 Col. Héroes   C.P. 20190 Aguascalientes, Ags',
        '(449) 910 64 90 Fax (449) 910 64 91',
        'plantaalimento@sabro.com.mx']
    
    
    var currentArray = []
    
    var directorio_ventas_marca_select = document.querySelector('#directorio_ventas_marca_select')
    var current_brand = $(directorio_ventas_marca_select.options[directorio_ventas_marca_select.selectedIndex]).val()
    
    
    
    function getEstadosSelectContent(_arr) {
        var estadosPolloSelectHtml = ''
    
        for (var i = 0; i < _arr.length; i++) {
            estadosPolloSelectHtml += '<option value="' + i + '">' + _arr[i][0] + '</option>'
        }
    
        return estadosPolloSelectHtml;
    }
    
    function updateEstadosSelect(_brand) {
        
        switch (_brand) {
            case 'pollo':
                currentArray = estados_pollo
                $('#estados_ventas_select').empty().html(getEstadosSelectContent(estados_pollo))
                break;
            case 'huevo':
                currentArray = estados_huevo
                $('#estados_ventas_select').empty().html(getEstadosSelectContent(estados_huevo))
                break;
            case 'aliamsa':
                currentArray = estados_aliamsa
                $('#estados_ventas_select').empty().html(getEstadosSelectContent(estados_aliamsa))
                break;
        }
    }
    
    
    
    
    $('#directorio_ventas_marca_select').on('change', function (e) {
        var currval = $(e.currentTarget.options[e.currentTarget.selectedIndex]).val()
        updateEstadosSelect(currval)
    
        updateIframe(0)
    })
    
    
    
    $('#estados_ventas_select').on('change', function (e) {
        var currval = $(e.currentTarget.options[e.currentTarget.selectedIndex]).val()
        updateIframe(currval)
    })
    
    
    
    
    function updateIframe(_indx) {
        
        $('.map_container iframe').attr('src', currentArray[_indx][1])
        
        $('.exp_direccion.exp_details span').html(currentArray[_indx][2])
        
        $('.exp_tel.exp_details span').html(currentArray[_indx][3])
        
        $('.exp_mail.exp_details span').html(currentArray[_indx][4])
    }
    
    
    updateEstadosSelect(current_brand)
    updateIframe(0)
}



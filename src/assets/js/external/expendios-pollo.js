if ($('#expendios_select').length > 0) {


    var expendios_pollo = []

    // expendios_pollo[0] = ['Aguascalientes Norte 1', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d118448.92868229389!2d-102.294506!3d21.914205!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ee538187c631%3A0x65c35745f542b3fc!2sArnulfo%20M.%20Vald%C3%A9z%20286%2C%20Centro%20Comercial%20Agropecuario%2C%2020135%20Aguascalientes%2C%20Ags.%2C%20M%C3%A9xico!5e0!3m2!1ses!2sus!4v1591407208618!5m2!1ses!2sus',
    //     'Norte 1: Centro Comercial Agropecuario Arnulfo M. Valdéz No. 286',
    //     '(449) 914-18-94']

    // expendios_pollo[1] = ['Aguascalientes Norte 2', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d118448.82888352242!2d-102.292787!3d21.914325!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ee53a7c9084d%3A0x5215710e872df9d3!2sArnulfo%20M.%20Vald%C3%A9z%20324%2C%20Centro%20Comercial%20Agropecuario%2C%2020135%20Aguascalientes%2C%20Ags.%2C%20M%C3%A9xico!5e0!3m2!1ses!2sus!4v1591408141730!5m2!1ses!2sus',
    //     'Norte 2: Centro Comercial Agropecuario Arnulo M. Valdéz No. 324',
    //     '(449) 914-11-08']

    // expendios_pollo[2] = ['Aguascalientes Centro', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d118475.64107418913!2d-102.273274!3d21.882063!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ee0dc058e779%3A0x1b45752725cc99e0!2sJuan%20Escutia%20302%2C%20H%C3%A9roes%2C%2020190%20Aguascalientes%2C%20Ags.%2C%20M%C3%A9xico!5e0!3m2!1ses!2sus!4v1591408175503!5m2!1ses!2sus',
    //     'Centro: Juan Escutia No. 302 Colonia Héroes',
    //     '(449) 910-64-95 | (449) 970-34-30']

    // expendios_pollo[3] = ['Aguascalientes Sur', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3703.380964750631!2d-102.28199648506029!3d21.84283628556312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429edbcffffff95%3A0xa342f078324d929a!2sSabropollo!5e0!3m2!1ses-419!2smx!4v1594257989623!5m2!1ses-419!2smx',
    //     'Sur: Julio Díaz Torre 104-A Ciudad Industrial C.P. 20290 Aguascalientes, Ags.',
    //     '(449) 910-64-95 | (449) 970-34-30']

    expendios_pollo[0] = ['Aguascalientes', 'https://www.google.com/maps/d/embed?mid=1jy7H-_HkhoIrLAbhkcvzA6KttivLSkAp',
    'Calle Mercado de Abastos No. L-4 Secc. 1 Col. mercado de Abastos Zacatecas, ZAC. C.P. 98057',
    '(492) 924-69-30 | (492) 924-88-65']

    expendios_pollo[1] = ['Zacatecas', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d117722.19718852427!2d-102.595674!3d22.77211!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86824e6d76be2f3b%3A0x1f59b2af9f9a89d2!2sMercado%20de%20Abastos%2C%20Zona%20A%2C%20Mecanicos%2C%2098057%20Zacatecas%2C%20Zac.%2C%20M%C3%A9xico!5e0!3m2!1ses!2sus!4v1591408224703!5m2!1ses!2sus',
        'Calle Mervcado de Abastos No. 5 y 6 Col. mercado de Abastos Zacatecas, ZAC. C.P. 98057',
        '(492) 924-69-30 | (492) 924-88-65']

    expendios_pollo[2] = ['Irapuato', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.0664845071515!2d-101.33720058508034!3d20.666873986195448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842c8086fa09a1c9%3A0x7b8bfc2d8db05b06!2sSabroPollo%20CEDIS%20Irapuato!5e0!3m2!1ses-419!2smx!4v1594396762666!5m2!1ses-419!2smx',
        'Cerrada de las Ánimas No. 947-A Col. Guadalupe  C.P. 36580',
        '(462) 626 45 19 | (462) 626 45 21']

    expendios_pollo[3] = ['Morelia', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d120204.07171890842!2d-101.255953!3d19.696557!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d095390ccab77%3A0x7b04e7543748b810!2sMargarita%20Maza%20de%20Ju%C3%A1rez%20116%2C%20Ni%C3%B1o%20Artillero%2C%2058337%20Morelia%2C%20Mich.%2C%20M%C3%A9xico!5e0!3m2!1ses!2sus!4v1591408315390!5m2!1ses!2sus',
        'Margarita Maza de Juárez No. 116 Col. Felicitas del Río  C.P. 58040',
        '(443) 316 63 00 | (443) 316 75 66']

    expendios_pollo[4] = ['Querétaro', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.4711339671767!2d-100.26805778508198!3d20.568808886249393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d3429935bd3d15%3A0x8e563e6ef3b0ad46!2sSabro%20Pollo!5e0!3m2!1ses-419!2smx!4v1594396528163!5m2!1ses-419!2smx',
        'Av. Del marqués No. 8-A C.P. 76246 Parque Industrial Bernardo Quintana',
        '(442) 212 16 59 | (442) 224 10 64']




    var optionslist = '';

    for (var i = 0; i < expendios_pollo.length; i++) {
        optionslist += '<option value="' + i + '">' + expendios_pollo[i][0] + '</option>';
    }

    $('#expendios_select').empty().html(optionslist)



    $('#expendios_select').on('change', function (e) {
        var currval = $(e.currentTarget.options[e.currentTarget.selectedIndex]).val()
        updateIframe(currval)
    })



    updateIframe(0)



    function updateIframe(_indx) {
        $('.map_container iframe').attr('src', this.expendios_pollo[_indx][1])

        $('.exp_direccion.exp_details span').html(this.expendios_pollo[_indx][2])

        $('.exp_tel.exp_details span').html(this.expendios_pollo[_indx][3])
    }

}
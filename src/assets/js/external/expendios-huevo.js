
if ($('#expendios_select').length > 0) {

    var expendios_huevo = []

    expendios_huevo[0] = ['aguascalientes 1',
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d118448.92868229389!2d-102.294506!3d21.914205!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ee538187c631%3A0x65c35745f542b3fc!2sArnulfo%20M.%20Vald%C3%A9z%20286%2C%20Centro%20Comercial%20Agropecuario%2C%2020135%20Aguascalientes%2C%20Ags.%2C%20M%C3%A9xico!5e0!3m2!1ses!2sus!4v1591407208618!5m2!1ses!2sus',
        'Centro Comercial Agropecuario Arnulfo M. Valdéz No. 286',
        '(449) 914-18-94']

    expendios_huevo[1] = ['aguascalientes 2', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d118448.82888352242!2d-102.292787!3d21.914325!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ee53a7c9084d%3A0x5215710e872df9d3!2sArnulfo%20M.%20Vald%C3%A9z%20324%2C%20Centro%20Comercial%20Agropecuario%2C%2020135%20Aguascalientes%2C%20Ags.%2C%20M%C3%A9xico!5e0!3m2!1ses!2sus!4v1591408141730!5m2!1ses!2sus',
        'Centro Comercial Agropecuario Arnulo M. Valdéz No. 324',
        '(449) 914-11-08']

    expendios_huevo[2] = ['aguascalientes juan escutia', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d118475.64107418913!2d-102.273274!3d21.882063!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ee0dc058e779%3A0x1b45752725cc99e0!2sJuan%20Escutia%20302%2C%20H%C3%A9roes%2C%2020190%20Aguascalientes%2C%20Ags.%2C%20M%C3%A9xico!5e0!3m2!1ses!2sus!4v1591408175503!5m2!1ses!2sus',
        'Juan Escutia No. 302 Colonia Héroes',
        '(449) 910-64-95 | (449) 970-34-30']

    expendios_huevo[3] = ['zacatecas', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d117722.19718852427!2d-102.595674!3d22.77211!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86824e6d76be2f3b%3A0x1f59b2af9f9a89d2!2sMercado%20de%20Abastos%2C%20Zona%20A%2C%20Mecanicos%2C%2098057%20Zacatecas%2C%20Zac.%2C%20M%C3%A9xico!5e0!3m2!1ses!2sus!4v1591408224703!5m2!1ses!2sus',
        'Calle Mervcado de Abastos No. L-4 Secc. 1 Col. mercado de Abastos Zacatecas, ZAC. C.P. 98057',
        '(492) 924-69-30 | (492) 924-88-65']




    $('#expendios_select').on('change', function (e) {
        var currval = $(e.currentTarget.options[e.currentTarget.selectedIndex]).val()
        updateIframe(currval)
    })



    updateIframe(0)



    function updateIframe(_indx) {
        $('.map_container iframe').attr('src', this.expendios_huevo[_indx][1])

        $('.exp_direccion.exp_details span').html(this.expendios_huevo[_indx][2])

        $('.exp_tel.exp_details span').html(this.expendios_huevo[_indx][3])
    }

}
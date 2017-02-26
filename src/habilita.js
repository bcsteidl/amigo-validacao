'use strict'

const $ = require('jquery')

module.exports = function(opcao) {
    var retorno = undefined;

    if (opcao == undefined) {
        // Retorna habilitação atual
        retorno = !$(this).attr("disabled");
    } else {
        if (opcao == true) {
            $(this).attr("disabled", false);
            if ($(this).is("select"))
                $(this).css({
                    "background-color": "#FFFFFF",
                    "color": "black"
                });
        } else {
            $(this).attr("disabled", true);
            if ($(this).is("select"))
                $(this).css({
                    "background-color": "#DFDFDF",
                    "color": "#545454"
                });
        }
    }
    return retorno;
}

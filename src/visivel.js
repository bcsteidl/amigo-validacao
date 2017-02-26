'use strict'

const $ = require('jquery')

module.exports = function(opcao) {
    var retorno = undefined;

    // Se o pai for um Label obtem o objeto pai, senão obtem o objeto filho
    var obj = ($(this).parent().is('label') ? $(this).parent() : ($(this).parent().parent().is('label') ? $(this).parent().parent() : $(this)));
    if (opcao == undefined) {
        // Retorna visibilidade atual
        if (obj.css("visibility") == "hidden" || obj.css("display") == "none") {
            retorno = false;
        } else {
            retorno = true;
        };
    } else {
        if (opcao == true) {
            obj.show();
        } else {
            obj.hide();
        }
    }
    return retorno;
}

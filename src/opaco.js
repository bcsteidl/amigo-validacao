'use strict'

module.exports = function(opcao) {
    var retorno = undefined;

    // Se o pai for um Label obtem o objeto pai, senão obtem o objeto filho
    var obj = ($(this).parent().is('label') || $(this).parent().parent().is('label') ? $(this).parent() : $(this));
    if (opcao == undefined) {
        // Retorna opacidade atual
        retorno = obj.css("opacity");
    } else {
        obj.css("opacity", opcao);
    }
    return retorno;
}

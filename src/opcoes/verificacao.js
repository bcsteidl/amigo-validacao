'use strict'

module.exports = function(seletor, opcoesJS) {
    var defaults = {
        rotulo: "",
        horizontal: "0px",
        vertical: "0px",
        largura: "100px",
        altura: "16px",
        habilita: !seletor.is(":disabled"),
        visivel: seletor.is(":visible"),
        tratamento: 0
    };
    var opcoesHTML = {
        rotulo: seletor.data("rotulo"),
        horizontal: seletor.data("horizontal"),
        vertical: seletor.data("vertical"),
        largura: seletor.data("largura"),
        altura: seletor.data("altura"),
        habilita: seletor.data("habilita"),
        visivel: (seletor.data("visivel") != false && seletor.data("visivel") != "false" ? true : false),
        tratamento: seletor.data("tratamento")
    };

    var opcoes = $.extend({}, defaults, opcoesHTML);
    opcoes = $.extend({}, opcoes, opcoesJS);

    return opcoes;
}

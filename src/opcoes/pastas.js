'use strict'

module.exports = function(seletor, opcoesJS) {
    var defaults = {
        horizontal: "0px",
        vertical: "0px",
        largura: "100px",
        altura: "100px",
        visivel: seletor.is(":visible"),
        borda: "1px",
        corfundo: "#DFDFDF"
    };
    var opcoesHTML = {
        horizontal: seletor.data("horizontal"),
        vertical: seletor.data("vertical"),
        largura: seletor.data("largura"),
        altura: seletor.data("altura"),
        visivel: (seletor.data("visivel") != false ? true : false),
        borda: seletor.data("borda"),
        corfundo: seletor.data("corfundo")
    };

    var opcoes = $.extend({}, defaults, opcoesHTML);
    opcoes = $.extend({}, opcoes, opcoesJS);

    return opcoes;
}

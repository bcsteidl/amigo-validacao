'use strict'

module.exports = function(seletor, opcoesJS) {
    var defaults = {
        rotulo: "",
        horizontal: "0px",
        vertical: "0px",
        largura: "100px",
        altura: "100px",
        visivel: seletor.is(":visible"),
        tipofonte: "\"Times New Roman\", \"Arial\", \"Courier New\", \"Sans-Serif\"",
        tamfonte: "13px",
        corfundo: false
    };
    var opcoesHTML = {
        rotulo: seletor.data("rotulo"),
        horizontal: seletor.data("horizontal"),
        vertical: seletor.data("vertical"),
        largura: seletor.data("largura"),
        altura: seletor.data("altura"),
        visivel: (seletor.data("visivel") != false ? true : false),
        tipofonte: seletor.data("tipofonte"),
        tamfonte: seletor.data("tamfonte"),
        corfundo: (seletor.data("corfundo") != "" ? seletor.data("corfundo") : false)
    };

    var opcoes = $.extend({}, defaults, opcoesHTML);
    opcoes = $.extend({}, opcoes, opcoesJS);

    return opcoes;
}

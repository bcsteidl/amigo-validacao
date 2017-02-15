'use strict'

module.exports = function(seletor, opcoesJS) {
    var defaults = {
        rotulo: "",
        horizontal: "0px",
        vertical: "0px",
        largura: "50px",
        altura: "16px",
        tamanho: 0,
        minimo: null,
        maximo: null,
        habilita: !seletor.is(":disabled"),
        visivel: seletor.is(":visible"),
        edita: true,
        tratamento: 0,
        tipofonte: "\"Times New Roman\", \"Arial\", \"Courier New\", \"Sans-Serif\"",
        tamfonte: "13px"
    };
    var opcoesHTML = {
        rotulo: seletor.data("rotulo"),
        horizontal: seletor.data("horizontal"),
        vertical: seletor.data("vertical"),
        largura: seletor.data("largura"),
        altura: seletor.data("altura"),
        tamanho: seletor.data("tamanho"),
        minimo: seletor.data("minimo"),
        maximo: seletor.data("maximo"),
        habilita: seletor.data("habilita"),
        visivel: (seletor.data("visivel") != false ? true : false),
        edita: seletor.data("edita"),
        tratamento: seletor.data("tratamento"),
        tipofonte: seletor.data("tipofonte"),
        tamfonte: seletor.data("tamfonte")
    };

    var opcoes = $.extend({}, defaults, opcoesHTML);
    opcoes = $.extend({}, opcoes, opcoesJS);

    return opcoes;
}

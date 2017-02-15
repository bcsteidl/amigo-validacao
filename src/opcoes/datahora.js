'use strict'

module.exports = function(seletor, opcoesJS) {
    var defaults = {
        tipo: "datahora",
        rotulo: "",
        horizontal: "0px",
        vertical: "0px",
        largura: "100px",
        altura: "16px",
        tamanho: 19,
        habilita: !seletor.is(":disabled"),
        visivel: seletor.is(":visible"),
        edita: true,
        tratamento: 0,
        tipofonte: "\"Times New Roman\", \"Arial\", \"Courier New\", \"Sans-Serif\"",
        tamfonte: "13px"
    };
    var opcoesHTML = {
        tipo: seletor.data("tipo"),
        rotulo: seletor.data("rotulo"),
        horizontal: seletor.data("horizontal"),
        vertical: seletor.data("vertical"),
        largura: seletor.data("largura"),
        altura: seletor.data("altura"),
        tamanho: seletor.data("tamanho"),
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

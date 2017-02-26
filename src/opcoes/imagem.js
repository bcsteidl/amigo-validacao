'use strict'

const $ = require('jquery')

module.exports = function(seletor, opcoesJS) {
    var defaults = {
        nome: "",
        horizontal: "0px",
        vertical: "0px",
        largura: "100px",
        altura: "100px",
        habilita: true,
        visivel: seletor.is(":visible"),
        edita: false,
        borda: "1px",
        imagem: "imagem_quebrada.png"
    };
    var opcoesHTML = {
        nome: seletor.data("nome"),
        horizontal: seletor.data("horizontal"),
        vertical: seletor.data("vertical"),
        largura: seletor.data("largura"),
        altura: seletor.data("altura"),
        habilita: seletor.data("habilita"),
        visivel: (seletor.data("visivel") != false ? true : false),
        edita: (seletor.data("edita") != false ? true : false),
        borda: seletor.data("borda"),
        imagem: seletor.data("imagem")
    };

    var opcoes = $.extend({}, defaults, opcoesHTML);
    opcoes = $.extend({}, opcoes, opcoesJS);

    return opcoes;
}

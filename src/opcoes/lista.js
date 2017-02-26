'use strict'

const $ = require('jquery')

module.exports = function(seletor, opcoesJS) {
    var defaults = {
        rotulo: "",
        horizontal: "0px",
        vertical: "0px",
        largura: "100%",
        altura: "98%",
        visivel: seletor.is(":visible"),
        borda: 1,
        corfundo: "#D6D6D6",
        valores: "",
        menu: "",
        menuopcoes: {
            atualizar: true,
            incluir: true,
            editar: true,
            apagar: true
        },
        formulario: "",
        condicao: "",
        ordem: [],
        naoOrdena: [],
    };
    var opcoesHTML = {
        rotulo: seletor.data("rotulo"),
        horizontal: seletor.data("horizontal"),
        vertical: seletor.data("vertical"),
        largura: seletor.data("largura"),
        altura: seletor.data("altura"),
        visivel: (seletor.data("visivel") != false ? true : false),
        borda: seletor.data("borda"),
        corfundo: seletor.data("corfundo"),
        valores: seletor.data("valores"),
        menu: seletor.data("menu"),
        menuopcoes: seletor.data("menuopcoes"),
        formulario: seletor.data("formulario"),
        condicao: seletor.data("condicao"),
        ordem: seletor.data("ordem"),
        naoOrdena: seletor.data("naoOrdena")
    };

    var opcoes = $.extend({}, defaults, opcoesHTML);
    opcoes = $.extend({}, opcoes, opcoesJS);

    return opcoes;
}

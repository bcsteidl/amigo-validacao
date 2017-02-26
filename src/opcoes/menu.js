'use strict'

const $ = require('jquery')

module.exports = function(seletor, opcoesJS) {
    var defaults = {
        rotulo: "",
        horizontal: "0px",
        vertical: "0px",
        largura: "100px",
        altura: "16px",
        habilita: !seletor.is(":disabled"),
        visivel: seletor.is(":visible"),
        tratamento: 0,
        tipofonte: "\"Times New Roman\", \"Arial\", \"Courier New\", \"Sans-Serif\"",
        tamfonte: "13px",
        opcoes: "",
        url: "http://localhost:3000/api/menus",
        idmenu: 0
    };
    var opcoesHTML = {
        rotulo: seletor.data("rotulo"),
        horizontal: seletor.data("horizontal"),
        vertical: seletor.data("vertical"),
        largura: seletor.data("largura"),
        altura: seletor.data("altura"),
        habilita: seletor.data("habilita"),
        visivel: (seletor.data("visivel") != false ? true : false),
        tratamento: seletor.data("tratamento"),
        tipofonte: seletor.data("tipofonte"),
        tamfonte: seletor.data("tamfonte"),
        opcoes: seletor.data("opcoes"),
        url: seletor.data("url"),
        idmenu: seletor.data("idmenu")
    };

    var opcoes = $.extend({}, defaults, opcoesHTML);
    opcoes = $.extend({}, opcoes, opcoesJS);

    return opcoes;
}

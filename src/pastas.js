'use strict'

const $ = require('jquery')

const opcoesPastas = require('./opcoes/pastas')

module.exports = function(parametros) {
    return this.each(function() {

        // Definindo valores padrões
        var opcoes = opcoesPastas($(this), parametros);

        // Cria os rotulos caso não tenham sido especificados no HTML
        if ($(this).find("a[href]").length == 0) {
            $(this).children("div:first").before("<ul>");
            $(this).children("div").each(function(index) {
                var rotulo = ($(this).data("rotulo") != undefined ? $(this).data("rotulo") : "_");
                $("<li>").append("<a href='#_" + $(this).attr("name") + "'>" + rotulo + "</a>").appendTo($(this).parent().children("ul"));
                $(this).attr("id", "_" + $(this).attr("name"));
            });
        }

        // Formata os containers de pastas e acerta a cor de fundo das pastas
        $(this).tabs().css("padding", "0px").children("ul").css("padding", "0px").children("li").css("margin", "-1px -1px -1px 0px").children("a").css("padding", ".2em .5em .2em .5em");
        $(this).children("div").css("position", "relative").css("background-color", opcoes.corfundo).css("padding", "0px").css("overflow", "hidden").height(parseInt(opcoes.altura) - 26);

        // Posiciona e dimensiona o campo na tela
        $(this).tipagem("posiciona", opcoes.horizontal, opcoes.vertical, opcoes.largura, opcoes.altura);

        // Torna o campo invisivel conforme a opcao informada
        if (opcoes.visivel != null) {
            $(this).tipagem("visivel", opcoes.visivel);
        }
    });
}

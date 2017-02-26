'use strict'

const $ = require('jquery')

const opcoesDecimal = require('./opcoes/decimal')

module.exports = function(parametros) {
    return this.each(function() {
        // Desligando o spinner se ele ja existir para não confundir a formatação do campo
        if ($(this).parent().hasClass("ui-spinner"))
            $(this).spinner("destroy");

        // Definindo valores padrões
        var opcoes = opcoesDecimal($(this), parametros);

        // Criar label para mostrar o rotulo, caso ele tenha sido definido
        if ($(this).data("tipado") != true) {
            $("<label>").appendTo($(this).parent()).append($(this));
            $(this).data("tipado", true);
        }
        $(this).parent().find("span").remove();
        if (opcoes.rotulo != "") {
            $(this).parent().append("<span>" + opcoes.rotulo + "</br></span").append($(this));
        }

        // Formata tipo e tamanho do fonte
        $(this).tipagem("fonte", opcoes.tipofonte, opcoes.tamfonte);

        // Posiciona e dimensiona o campo na tela
        $(this).tipagem("posiciona", opcoes.horizontal, opcoes.vertical, opcoes.largura, opcoes.altura);
        $(this).css("text-align", "right");

        // Seta o campo conforme a forma de tratamento no sistema, mostra indicação no próprio campo
        $(this).tipagem("tratamento", opcoes.tratamento);

        // Torna o campo invisivel conforme a opcao informada
        if (opcoes.visivel != null) {
            $(this).tipagem("visivel", opcoes.visivel);
        }

        // Habilita ou desabilita o campo conforme a opcao informada
        if (opcoes.habilita != null) {
            $(this).tipagem("habilita", opcoes.habilita);
        }

        // Mostra botão de edição do numero no campo
        if (opcoes.edita && opcoes.visivel == true) {
            $(this).width($(this).width() - 17);
            var div = 1;
            for (var i = 1; i <= opcoes.decimal; i++) {
                div = div / 10;
            }
            $(this).spinner({
                min: opcoes.minimo,
                max: opcoes.maximo,
                step: div,
                numberFormat: "n" + opcoes.decimal
            });
            $(this).css("padding-right", "4px")

            // Formata conforme campo de input texto normal
            $(this).parent().css({
                "border": "2px inset",
                "border-image-source": "initial",
                "border-image-slice": "initial",
                "border-image-width": "initial",
                "border-image-outset": "initial",
                "border-image-repeat": "initial",
                "border-top-color": "rgb(238, 238, 238)",
                "border-left-color": "rgb(238, 238, 238)"
            });
            $(this).css({
                "margin": "0px",
                "margin-right": "18px",
                "vertical-align": "top"
            });
        }

        $(this).focusin(function(key) {
            // Retira os pontos de milhar
            $(this).val($(this).val().replace(/\./g, ""));
        });

        $(this).keypress(function(key) {
            // Limita o tamanho do campo com o tamanho informado nas opções se não for modo ao consultar
            if ($("#_btn_consultar").attr("disabled")) {
                if (opcoes.tamanho > 0 && $(this).val().replace(/\D/g, "").length >= (opcoes.tamanho)) {
                    key.preventDefault();
                }
            }
        });

        $(this).focusout(function(key) {
            // Formata o valor do campo para apresentação se não for modo aoconsultar
            if ($("#_btn_consultar").attr("disabled")) {
                $(this).tipagem("formata", "decimal", opcoes.tamanho, opcoes.decimal);
            }
        });

        $(this).bind('paste', function(key) {
            // Formata o valor do campo para apresentação se não for modo aoconsultar
            if ($("#_btn_consultar").attr("disabled")) {
                var el = $(this);
                setTimeout(function() {
                    // Formata o valor do campo para apresentação
                    el.tipagem("formata", "decimal", opcoes.tamanho, opcoes.decimal);
                }, 100);
            }
        });
    });
}

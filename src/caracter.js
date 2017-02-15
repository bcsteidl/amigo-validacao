'use strict'

const opcoesCaracter = require('./opcoes/caracter')

const Browser = {
    Chrome: (navigator.userAgent.indexOf("Chrome") >= 0 ? true : false),
    Firefox: (navigator.userAgent.indexOf("Firefox") >= 0 ? true : false),
    Opera: (navigator.userAgent.indexOf("Opera") >= 0 ? true : false),
    IE: (navigator.userAgent.indexOf("IE") >= 0 ? true : false)
};

module.exports = function(parametros) {
    return this.each(function() {

        // Definindo valores padrões
        var opcoes = opcoesCaracter($(this), parametros);

        // Desligando o campos de edição se ele ja existir para não confundir a formatação do campo
        if ($(this).data("tipado") && opcoes.edita) {
            var tag = $(this).parent()
            $(tag).parent().append($(this))
            $(tag).remove()
        }

        // Criar label para mostrar o rotulo, caso ele tenha sido definido
        if ($(this).data("tipado") != true) {
            $("<label>").appendTo($(this).parent()).append($(this));
            $(this).data("tipado", true);
        }
        $(this).parent().find("span").remove();
        if (opcoes.rotulo != "") {
            $(this).parent().append("<span>" + opcoes.rotulo + "</br></span>").append($(this));
        }

        // Formata tipo e tamanho do fonte
        $(this).tipagem("fonte", opcoes.tipofonte, opcoes.tamfonte);

        // Posiciona e dimensiona o campo na tela
        $(this).tipagem("posiciona", opcoes.horizontal, opcoes.vertical, opcoes.largura, opcoes.altura);

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

        // Formata textarea conforme campo de input texto normal
        $(this).addClass("ui-corner-all")

        // Mostra botão de edição do texto do campo
        if (opcoes.edita && !$(this).is("textarea")) {
            // Reduz o tamanho do campo para conter o botão
            $(this).width($(this).width()-23)
            $(this).css("padding-right", "18px")

            // Encapsula o input em um span para controlar o botão de edição
            $("<span/>", {
                class: "ui-spinner ui-corner-all ui-widget ui-widget-content"
            }).appendTo($(this).parent()).append($(this))

            // Cria o botão para edição do conteúdo do campo
            const campo = $(this)
            $("<a/>", {
                tabindex: -1,
                right: "2px",
                height: $(this).height(),
                class: "ui-button ui-widget ui-spinner-button ui-spinner-up ui-corner-right ui-button-icon-only"
            }).append($("<span/>", {
                class: "ui-button-icon ui-icon ui-icon-clipboard"
            })).click(function() {
                var jan = $("<div/>", {
                    title: campo.parent().text()
                }).css({
                    "background-color": "#CCDDDD",
                    "padding": "10px",
                    "border": "1px solid #000000",
                    "border-radius": "4px"
                });

                $(jan).append($("<textarea wrap='hard' id='teste'>" + campo.val() + "</textarea>").addClass("ui-corner-all").css({
                    "position": "static",
                    "width": "99%",
                    "height": "87%"
                }));

                $(jan).append($("<button>OK</button>").addClass("ui-corner-all").css({
                    "position": "absolute",
                    "right": "20%",
                    "bottom": "1%",
                    "width": "17%",
                    "type": "button",
                    "class": "btn"
                }).click(function() {
                    campo.val($(this).parent().children("textarea").val());
                    $(jan).dialog("close");
                }));

                $(jan).append($("<button>Cancelar</button>").addClass("ui-corner-all").css({
                    "position": "absolute",
                    "right": "2%",
                    "bottom": "1%",
                    "width": "17%",
                    "type": "button",
                    "class": "btn"
                }).click(function() {
                    $(jan).dialog("close");
                }));

                $(jan).dialog({
                    autoOpen: true,
                    width: 600,
                    height: 301,
                    minWidth: 400,
                    minHeight: 160,
                    closeOnEscape: false,
                    closeText: "Fechar a janela",
                    resizable: true,
                    draggable: true,
                    modal: true
                });
            }).appendTo($(this).parent()).css({
                "top": "2px",
                "right": "2px"
            })
        }

        $(this).focusin(function(key) {
            $(this).parent().find("a").css({
                "outline": "-webkit-focus-ring-color auto 5px"
            });
        });

        $(this).focusout(function(key) {
            // Formata o valor do campo para apresentação se não for modo aoconsultar
            if ($("#_btn_consultar").attr("disabled")) {
                $(this).parent().find("a").css({
                    "outline": "none"
                });
            }
        });

        $(this).keypress(function(key) {
            // Limita o tamanho do campo com o tamanho informado nas opções se não for modo ao consultar
            if ($("#_btn_consultar").attr("disabled")) {
                if (opcoes.tamanho > 0 && $(this).val().length >= opcoes.tamanho) {
                    key.preventDefault();
                }
            }
        });

        $(this).bind('paste', function() {
            // Formata o valor do campo para apresentação se não for modo aoconsultar
            if ($("#_btn_consultar").attr("disabled")) {
                var el = $(this);
                setTimeout(function() {
                    // Limita o tamanho do campo com o tamanho informado nas opções
                    el.tipagem("formata", "caracter", opcoes.tamanho);
                }, 100);
            }
        });
    });
}

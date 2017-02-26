'use strict'

require('../node_modules/jquery-ui-timepicker-addon/dist/jquery-ui-timepicker-addon.css')

const $ = require('jquery')
require('jquery-ui-timepicker-addon')

const opcoesDataHora = require('./opcoes/datahora')

const Browser = {
    Chrome: (navigator.userAgent.indexOf("Chrome") >= 0 ? true : false),
    Firefox: (navigator.userAgent.indexOf("Firefox") >= 0 ? true : false),
    Opera: (navigator.userAgent.indexOf("Opera") >= 0 ? true : false),
    IE: (navigator.userAgent.indexOf("IE") >= 0 ? true : false)
};

module.exports = function(parametros) {
    return this.each(function() {

        // Definindo valores padrões
        var opcoes = opcoesDataHora($(this), parametros);

        // Desligando o datetimepicker se ele ja existir para não confundir a formatação do campo
        if ($(this).data("tipado") && opcoes.edita) {
            $(this).datetimepicker("destroy");
            var tag = $(this).parent()
            $(tag).parent().append($(this))
            $(tag).remove()
        }

        // Criar label para mostrar o rotulo, caso ele tenha sido definido
        $(this).addClass("ui-corner-all")
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

        // Seleciona tipo DataHora, Data ou Hora
        switch (opcoes.tipo.toLowerCase()) {
            case "datahora":
                $(this).datetimepicker({
                    showOn: (opcoes.edita && opcoes.habilita ? "button" : ""),
                    // showOn: "",
                    showButtonPanel: false,
                    dateFormat: 'dd/mm/yy',
                    timeFormat: 'HH:mm:ss',
                    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
                    dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
                    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
                    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
                    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                    timeOnlyTitle: 'Escolha a Hora',
                    timeText: 'Tempo',
                    hourText: 'Hora',
                    minuteText: 'Minutos',
                    secondText: 'Segundos'
                });
                break;
            case "data":
                $(this).datepicker({
                    showOn: (opcoes.edita && opcoes.habilita ? "button" : ""),
                    showButtonPanel: false,
                    dateFormat: 'dd/mm/yy',
                    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
                    dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
                    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
                    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
                    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
                });
                break;
            case "hora":
                $(this).timepicker({
                    showOn: (opcoes.edita && opcoes.habilita ? "button" : ""),
                    showButtonPanel: false,
                    timeFormat: 'HH:mm:ss',
                    timeOnlyTitle: 'Escolha a Hora',
                    timeText: 'Tempo',
                    hourText: 'Hora',
                    minuteText: 'Minutos',
                    secondText: 'Segundos'
                });
                break;
        }

        // Posiciona Habilita o botão de edição do calendario dos campos Data Hora
        if (opcoes.edita && opcoes.habilita && opcoes.visivel == true) {
            // Esconde o bottão original criado pelo datepicker
            $(this).parent().children("button").hide()

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
                class: "ui-button-icon ui-icon ui-icon-calendar"
            })).click(function() {
                $(this).parent().children("button").click()
            }).appendTo($(this).parent()).css({
                "top": "2px",
                "right": "2px"
            })
        }

        $(this).keypress(function(key) {
            // Limita o tamanho do campo com o tamanho informado nas opções se não for modo ao consultar
            if ($("#_btn_consultar").attr("disabled")) {
                if (opcoes.tamanho > 0 && $(this).val().length >= (opcoes.tamanho + 2)) {
                    key.preventDefault();
                }
            }
        });

        $(this).bind('paste', function() {
            var el = $(this);
            setTimeout(function() {
                // Limita o tamanho do campo com o tamanho informado nas opções
                el.tipagem("formata", "data", opcoes.tamanho);
            }, 100);
        });
    });
}

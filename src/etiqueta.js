'use strict'

const opcoesEtiqueta = require('./opcoes/etiqueta')

module.exports = function(parametros) {
    return this.each(function() {

        // Definindo valores padrões
        var opcoes = opcoesEtiqueta($(this), parametros);

        // Mostrar o rotulo, caso ele tenha sido definido
        if (opcoes.rotulo != "") {
            $(this).html(opcoes.rotulo);
        }

        // Definir a cor de fundo
        $(this).css("background", opcoes.corfundo);
        $(this).addClass("ui-corner-all").css("overflow", "hidden");

        // Formata tipo e tamanho do fonte
        $(this).tipagem("fonte", opcoes.tipofonte, opcoes.tamfonte);

        // Cria uma div para possibilitar a movimentação e redimensionamento na montagem das telas
        if ($(this).data("tipado") != true) {
            $("<div>").css("position", "absolute").appendTo($(this).parent()).append($(this));
            $(this).data("tipado", true);
        }

        // Posiciona e dimensiona o rotulo na tela
        $(this).tipagem("posiciona", opcoes.horizontal, opcoes.vertical, opcoes.largura, opcoes.altura);

        // Torna o rotulo invisivel conforme a opcao informada
        if (opcoes.visivel != null) {
            $(this).tipagem("visivel", opcoes.visivel);
        }
    });
}

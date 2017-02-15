'use strict'

const opcoesCaixa = require('./opcoes/caixa')

module.exports = function(parametros) {
    return this.each(function() {

        // Definindo valores padrões
        var opcoes = opcoesCaixa($(this), parametros);

        // Define tamanho da borda e cor de fundo
        $(this).addClass("container_imagem").css({
            position: "absolute",
            border: opcoes.borda + " solid #A6A6A6",
            background: opcoes.corfundo
        });

        // Posiciona e dimensiona o campo na tela
        $(this).tipagem("posiciona", opcoes.horizontal, opcoes.vertical, opcoes.largura, opcoes.altura);

        // Torna o campo invisivel conforme a opcao informada
        if (opcoes.visivel != null) {
            $(this).tipagem("visivel", opcoes.visivel);
        }
    });
}

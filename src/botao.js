'use strict'

const $ = require('jquery')

const opcoesBotao = require('./opcoes/botao')

module.exports = function(parametros) {
    return this.each(function() {

        // Definindo valores padrões
        var opcoes = opcoesBotao($(this), parametros);

        // Mostrar o rotulo, caso ele tenha sido definido
        $(this).addClass("ui-corner-all").html(opcoes.rotulo);

        // Mostrar a imagem, caso ela tenha sido definida
        if (opcoes.rotulo == "" && opcoes.imagem != "" && opcoes.imagem != "img/imagem_quebrada.png") {
            $(this).find("img").remove();
            $(this).html("<img src=" + opcoes.diretorio + opcoes.imagem + ">");
        }

        // Formata tipo e tamanho do fonte
        $(this).tipagem("fonte", opcoes.tipofonte, opcoes.tamfonte);

        // Cria uma div para possibilitar a movimentação e redimensionamento na montagem das telas
        if ($(this).data("tipado") != true) {
            $("<div>").css("position", "absolute").appendTo($(this).parent()).append($(this));
            $(this).data("tipado", true);
        }

        // Posiciona e dimensiona o botão na tela
        $(this).tipagem("posiciona", opcoes.horizontal, opcoes.vertical, opcoes.largura, opcoes.altura);

        // Habilita ou desabilita o botão conforme a opcao informada
        if (opcoes.habilita != null) {
            $(this).tipagem("habilita", opcoes.habilita);
        }

        // Torna o botão invisivel conforme a opcao informada
        if (opcoes.visivel != null) {
            $(this).tipagem("visivel", opcoes.visivel);
        }
    });
}

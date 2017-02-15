'use strict'

const opcoesSenha = require('./opcoes/senha')

module.exports = function(parametros) {
    return this.each(function() {

        // Torna campo do tipo senha para não apresentar a digitação
        $(this).attr('type', 'password');

        // Definindo valores padrões
        var opcoes = opcoesSenha($(this), parametros);

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

        // Seta o campo conforme a forma de tratamento no sistema, mostra indicação no próprio campo
        $(this).tipagem("tratamento", opcoes.tratamento);

        // Torna o campo invisivel conforme a opcao informada
        if (opcoes.visivel != null) {
            $(this).tipagem("visivel", opcoes.visivel);
        }

        //Adiciona a classe de arredondamento dos cantos do campos conforme padão JQuery-UI
        $(this).addClass("ui-corner-all")

        // Habilita ou desabilita o campo conforme a opcao informada
        if (opcoes.habilita != null) {
            $(this).tipagem("habilita", opcoes.habilita);
        }

        $(this).keypress(function(key) {
            // Limita o tamanho do campo com o tamanho informado nas opções
            if (opcoes.tamanho > 0 && $(this).val().length >= opcoes.tamanho) {
                key.preventDefault();
            }
        });

        $(this).bind('paste', function() {
            var el = $(this);
            setTimeout(function() {
                alert("Este tipo de campo não aceita copiar/colar valores!");
                el.val("");
            }, 100);
        });
    });
}

'use strict'

module.exports = function(horizontal, vertical, largura, altura) {

    // Se o pai for um Label, se o filho for uma tabela, ou se o filho for um botão ou se o filho for um label,
    // posiciona o elemento pai
    if ($(this).parent().is('label') || $(this).parent().hasClass("container_lista") || $(this).is('button') || $(this).is('label')) {
        $(this).parent().css({
            left: horizontal,
            top: vertical
        });
    } else {
        // Se o pai do pai for um label, posiciona o pai do pai
        if ($(this).parent().parent().is('label')) {
            $(this).parent().parent().css({
                left: horizontal,
                top: vertical
            });
        } else {
            $(this).css({
                left: horizontal,
                top: vertical
            });
        }
    };

    // Se o filho for uma tabela, dimensiona o elemento pai
    if ($(this).parent().hasClass("container_lista")) {
        $(this).parent().css({
            width: largura,
            height: altura
        });
    } else {
        // Não permite dimensionar tabela na primeira montagem do formulário
        if (!$(this).is('table')) {
            $(this).css({
                width: largura,
                height: altura
            });
        }
    }

    function checkNumber(valor) {
        return !isNaN(parseFloat(valor)) && isFinite(valor);
    };
}

'use strict'

module.exports = function(opcao) {
    var retorno = undefined;

    // Se o pai for um Label indica a forma de tratamento no pai
    var obj = ($(this).parent().is('label') ? $(this).parent().find("span") : $(this));
    switch (opcao) {
        case 0:
            // Campo de tratamento normal e sem obrigatoriedade de conteúdo
            obj.css("font-weight", "normal");
            obj.css("font-style", "normal");
            break;
        case 1:
            // Obriga a informação no conteúdo
            obj.css("font-weight", "bold");
            obj.css("font-style", "normal");
            break;
        case 2:
            // Campo com valores informados pelo sistema
            obj.css("font-weight", "normal");
            obj.css("font-style", "oblique");
            break;
        case undefined:
            // Retorna o valor de tratamento atual
            if (obj.css("font-weight") == 400 && obj.css("font-style") == "normal")
                retorno = 0;
            if (obj.css("font-weight") == "bold" && obj.css("font-style") == "normal")
                retorno = 1;
            if (obj.css("font-weight") == 400 && (obj.css("font-style") == "oblique" || obj.css("font-style") == "italic"))
                retorno = 2;
            break;
    }
    return retorno;
}

'use strict'

module.exports = function(parametros) {
    return this.each(function() {
        if (typeof(parametros) == "undefined") {
            $(this).tipagem($(input).data("tipo").toLowerCase());
        } else {
            $(this).tipagem(parametros.tipo.toLowerCase(), parametros);
        }
    });
}

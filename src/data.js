'use strict'

module.exports = function(parametros) {
    return this.each(function() {
        $(this).tipagem("datahora", parametros);
    });
}

'use strict'

const $ = require('jquery')

module.exports = function(parametros) {
    return this.each(function() {
        $(this).tipagem("datahora", parametros);
    });
}

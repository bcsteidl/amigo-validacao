'use strict'

const $ = require('jquery')

module.exports = function() {
    $.fn.tipagem = require('..')

    return this.each(function() {
        $(this).find("[data-tipo]").each(function(index, input) {
            $(input).tipagem($(input).data("tipo").toLowerCase());
        });
    })
}

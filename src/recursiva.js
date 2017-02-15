'use strict'

module.exports = function() {
    return this.each(function() {
        $(this).find("[data-tipo]").each(function(index, input) {
            $(input).tipagem($(input).data("tipo").toLowerCase());
        });
    })
}

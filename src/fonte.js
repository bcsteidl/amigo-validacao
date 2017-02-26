'use strict'

const $ = require('jquery')

module.exports = function(tipofonte, tamfonte) {

    // Define tipo e tamanho da fonte de cadacteres
    $(this).css("font-family", tipofonte);
    $(this).css("font-size", tamfonte);
}

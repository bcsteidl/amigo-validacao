'use strict'

require("./themes/amigo/jquery-ui.css")
require("./css/validacao.css")
const $ = require('jquery')
require('jquery-ui')

const lang = "pt"

var metodos = {
    init: require('./src/init'),
    recursiva: require('./src/recursiva'),
    destroy: require('./src/destroy'),
    caracter: require('./src/caracter'),
    senha: require('./src/senha'),
    inteiro: require('./src/inteiro'),
    decimal: require('./src/decimal'),
    booleano: require('./src/booleano'),
    data: require('./src/data'),
    hora: require('./src/hora'),
    datahora: require('./src/datahora'),
    menu: require('./src/menu'),
    botao: require('./src/botao'),
    etiqueta: require('./src/etiqueta'),
    imagem: require('./src/imagem'),
    caixa: require('./src/caixa'),
    lista: require('./src/lista'),
    pastas: require('./src/pastas'),
    fonte: require('./src/fonte'),
    posiciona: require('./src/posiciona'),
    tratamento: require('./src/tratamento'),
    visivel: require('./src/visivel'),
    habilita: require('./src/habilita'),
    opaco: require('./src/opaco'),
    formata: require('./src/formata'),
    getSelectionStart: require('./src/getSelectionStart'),
    setSelection: require('./src/setSelection')
};

module.exports = function(metodo) {
    // Correção de formação de numéricos no JQuery-UI
    $.widget("ui.spinner", $.ui.spinner, {
        _format: function(value) {
            if (value === "") {
                return "";
            }
            return window.Globalize && this.options.numberFormat ?
                Globalize(lang).formatNumber(value, {
                    minimumFractionDigits: Number(this.options.numberFormat.replace("n", ""))
                }) :
                value;
        },
        _parse: function(val) {
            if (typeof val === "string" && val !== "") {
                val = window.Globalize && this.options.numberFormat ?
                    Globalize(lang).parseNumber(val) : +val;
            }
            return val === "" || isNaN(val) ? null : val;
        }
    });

    // Inicializando os métodos de tipagem
    if (metodos[metodo]) {
        return metodos[metodo].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof metodo === 'object' || !metodo) {
        return metodos.init.apply(this, arguments);
    } else {
        $.error('Metodo ' + metodo + ' não existe neste plugin...');
    }

}

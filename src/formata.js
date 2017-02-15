'use strict'

module.exports = function(tipo, tamanho, decimais) {
    var valor = null;

    tamanho = (typeof(tamanho) == undefined ? 0 : tamanho);
    decimais = (typeof(decimais) == undefined ? 0 : decimais);

    // var tam = $(this).val().length;
    // var pos = $(this).tipagem("getSelectionStart");
    switch (tipo.toLowerCase()) {
        case "caracter":
            // Limita o tamanho do campo com o tamanho informado nas opções
            if (tamanho > 0 && $(this).val().length > tamanho) {
                $(this).val($(this).val().replace(/\D/g, "").substring(0, tamanho));
            }
            break;
        case "inteiro":
            // Limita o tamanho do campo com o tamanho informado nas opções
            if (tamanho > 0 && $(this).val().replace(/\D\-/g, "").length > tamanho) {
                $(this).val($(this).val().replace(/\D\-/g, "").substring(0, tamanho));
            }

            // Verifica se é um valor negativo
            // var neg = ($(this).val().substring(0, 1) == "-" ? "-" : "");

            // Remove tudo o que não é numero
            valor = String($(this).val().replace(/\D\-/g, ""));

            // Retira os pontos de milhar e reformata
            valor = formataNumero(valor, 0)

            // Atualiza o valor formatado no campo
            // $(this).val(neg + valor);
            $(this).val(valor);

            // Recalcula posição depois da reformatação
            // pos = pos + ($(this).val().length - tam);

            break;
        case "decimal":
            // Limita o tamanho do campo com o tamanho informado nas opções
            if (tamanho > 0 && $(this).val().replace(/\D/g, "").length > tamanho) {
                $(this).val($(this).val().replace(/\D/g, "").substring(0, tamanho));
            }

            // Verifica se é um valor negativo
            var neg = ($(this).val().substring(0, 1) == "-" ? "-" : "");

            // Remove tudo o que não é numero
            valor = String($(this).val().replace(/\D\,/g, ""));

            // Formata pontos das centenas e a virgula das casas decimais
            valor = formataNumero(valor.replace(",", "."), decimais, ",", ".")

            // Atualiza o valor formatado no campo
            $(this).val(neg + valor);

            // Recalcula posição depois da reformatação
            // pos = pos + ($(this).val().length - tam);

            break;
        case "data":

            break;
    }
    // $(this).tipagem("setSelection", pos, pos);

    // Função de formatação do numero
    function formataNumero(n, c, d, t) {
        var s, i, j;
        c = isNaN(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "," : d, t = t == undefined ? "." : t, s = n < 0 ? "-" : "", i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;
        return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
    }

}

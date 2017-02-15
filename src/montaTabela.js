'use strict'

const montaRegistros = require('./montaRegistros')

module.exports = function(seletor, valores, largura) {
    // Cria áreas de cabeçalho e registros da tabela
    if (seletor.children($('<thead>')).html() == undefined) {
        seletor.append($('<thead>')).append($('<tbody>'));
        // Monta as colunas do cabeçalho da tabela
        seletor.children("thead").append($('<tr>'));
        var tamtotal = 0;
        $.each(valores.cabecalhos, function(index, cab) {
            var coluna = $('<th width="' + cab.Tamanho + '">' + cab.Rotulo + '</th>');
            seletor.children("thead").children("tr").append(coluna);

            // Se tamanho for zero torna coluna invisivel
            if (cab.Tamanho == 0) {
                $(coluna).tipagem("visivel", "false");
            }
            tamtotal = tamtotal + cab.Tamanho;
        });
        // tamtotal = Number(largura.replace(/[^\d]+/g, '')) - tamtotal - 4;
        // if (tamtotal > 0) {
        var coluna = $('<th></th>');
        seletor.children("thead").children("tr").append(coluna);
        // }
    }

    // Monta os registros da tabela e retorna ordenação dos cabeçalhos
    var headers = montaRegistros(seletor, valores, tamtotal);

    return headers;
}

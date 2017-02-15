'use strict'

// Define a globalização que o AMIGO vai usar
const Gbl = $().funcoes.globalize("pt")

module.exports = function(seletor, valores, tamtotal) {
    // Variavel que guarda a ordenação pelos cabeçalhos
    var headers = {}

    // Limpa e recria a área de dados
    seletor.children("tbody").remove();
    seletor.append($('<tbody>'));

    // Monta os registros da tabela
    $.each(valores.registros, function(index, reg) {
        seletor.children("tbody").append($('<tr>'));
        $.each(valores.cabecalhos, function(ind, cab) {
            var coluna = "";
            if (reg[cab.Objeto] === false || reg[cab.Objeto] === true) {
                coluna = $('<td name="' + cab.Objeto + '" align="center">' + '<input type="checkbox" style="position:relative;top:2px" disabled="true"' + (reg[cab.Objeto] ? 'checked' : '') + '></td>');
            } else if (reg[cab.Objeto].length == 24 && reg[cab.Objeto].substr(4, 1) == "-" && reg[cab.Objeto].substr(7, 1) == "-") {
                coluna = $('<td name="' + cab.Objeto + '">' + Gbl.formatDate(new Date(reg[cab.Objeto]), { date: "short" }) + ' ' + Gbl.formatDate(new Date(reg[cab.Objeto]), { time: "medium" }) + '</td>');

                // indica o parser de data para as colunas que tem data como conteúdo
                headers[ind] = {
                    sorter: 'datetime'
                };
            } else if (reg[cab.Objeto].descricao) {
                coluna = $('<td name="' + cab.Objeto + '">' + reg[cab.Objeto].descricao + '</td>');
            } else {
                coluna = $('<td name="' + cab.Objeto + '">' + reg[cab.Objeto] + '</td>');
            }
            seletor.children("tbody").children("tr:last-child").append(coluna);

            // Se tamanho for zero torna coluna invisivel
            if (cab.Tamanho == 0) {
                $(coluna).tipagem("visivel", "false");
            }
        });
        // if (tamtotal > 0) {
        var coluna = $('<td></td>');
        seletor.children("tbody").children("tr:last-child").append(coluna);
        // }
    });

    return headers;
}

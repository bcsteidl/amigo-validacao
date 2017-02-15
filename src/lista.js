'use strict'

const opcoesLista = require('./opcoes/lista')
const montaTabela = require('./montaTabela')

// Define a globalização que o AMIGO vai usar
const Gbl = $().funcoes.globalize("pt")

// Verifica quando o Control e o Shift estão pressionados
var ctrlPressionada = false;
var shiftPressionada = false;
$(this).keydown(function(key) {
    switch (key.which) {
        case 16:
            shiftPressionada = true;
            break;
        case 17:
            ctrlPressionada = true;
            break;
    }
});

$(this).keyup(function(key) {
    switch (key.which) {
        case 16:
            shiftPressionada = false;
            break;
        case 17:
            ctrlPressionada = false;
            break;
    }
});

// Parser para configurar a data para o formato do Brasil
$.tablesorter.addParser({
    id: 'datetime',
    is: function(s) {
        return false;
    },
    format: function(s, table) {
        var formato = { skeleton: "yMd Hms" };
        return (s || s == "" ? "" : Gbl.parseDate(s, formato).getTime());
    },
    type: 'numeric'
})
$.tablesorter.addParser({
    id: 'date',
    is: function(s) {
        return false;
    },
    format: function(s, table) {
        var formato = { date: "short" };
        return (s || s == "" ? "" : Gbl.parseDate(s, formato).getTime());
    },
    type: 'numeric'
})
$.tablesorter.addParser({
    id: 'time',
    is: function(s) {
        return false;
    },
    format: function(s, table) {
        var formato = { time: "medium" };
        return (s || s == "" ? "" : Gbl.parseDate(s, formato).getTime());
    },
    type: 'numeric'
});

module.exports = function(parametros) {
    return this.each(function() {

        // Definindo valores padrões
        var opcoes = opcoesLista($(this), parametros);

        // Limpando cabeçalhos de data no parser do tablesorder
        var headers = {}

        // Monta a tabela caso ela tenha sido passada no formato JSON
        if (opcoes.valores != "") {
            headers = montaTabela($(this), opcoes.valores, opcoes.largura);

            // Atualiza o valor do parâmetro do formulário
            if (opcoes.valores.formulario != undefined) {
                opcoes.formulario = opcoes.valores.formulario;
            }

            // Atualiza o valor do parâmetro da condicao
            if (opcoes.valores.condicao != undefined) {
                opcoes.condicao = opcoes.valores.condicao;
            }

            // Atualiza o valor do parâmetro que habilita ou desabilita ordenação de colunas
            if (opcoes.valores.naoOrdena != undefined) {
                opcoes.naoOrdena = opcoes.valores.naoOrdena;
            }

            // Atualiza o valor do parâmetro ordem caso ele esteja dentro dos valores
            if (opcoes.valores.ordem != undefined) {
                opcoes.ordem = opcoes.valores.ordem;
            }
        }

        // Cria a ordenação da tabela
        $(this).addClass("container_lista_corpo").tablesorter({
            headers: headers,
            dateFormat: 'dd/mm/yyyy',
            sortList: opcoes.ordem
        }).trigger("update");

        // Dimensiona o tamanho de cada coluna
        $(this).find('.tablesorter-header-inner').each(function(index) {
            $(this).width($(this).parent().attr('width'));
        });

        // Encapsula tabela em uma div e cria um cabeçalho para ela
        if ($(this).children('thead').html() && !$(this).parent().hasClass("container_lista")) {
            var cabecalho = $('<table>').append('<thead>' + $(this).children('thead').html() + '</thead>').addClass('container_lista_cabecalho').addClass('tablesorter').addClass('tablesorter-default').css("width", "100%");
            // O DIV externo foi criado para evitar problemas de visibilidade das pastas do container de Pastas
            if ($(this).attr("name") == undefined) {
                $('<div name="lista_' + $(this).attr("name") + '" class="container_lista ui-corner-all redimencionar mover">').appendTo($(this).parent()).append(cabecalho).append($(this));
            } else {
                $('<div>').appendTo($(this).parent()).append($('<div name="lista_' + $(this).attr("name") + '" class="container_lista ui-corner-all redimencionar mover">').append(cabecalho).append($(this)));
            }
            $(this).css("width", "100%");
        }

        // Monta e aplica o array de campos e sentidos para ordenação na tabela original
        var corpo = $(this);
        $(this).parent().find('.container_lista_cabecalho th').each(function(index) {
            $(this).click(function() {
                var coluna = $(this);
                if (opcoes.naoOrdena.indexOf($(coluna).data("column")) < 0) {
                    if (ctrlPressionada) {
                        var existe = false;
                        $.each(opcoes.ordem, function(key, value) {
                            if (value[0] == index) {
                                if (value[1] == 0) {
                                    value[1] = 1;
                                    $(coluna).removeClass('tablesorter-headerAsc').addClass('tablesorter-headerDesc');
                                } else {
                                    value[1] = 0;
                                    $(coluna).removeClass('tablesorter-headerDesc').addClass('tablesorter-headerAsc');
                                }
                                existe = true;
                            }
                        });
                        if (existe == false) {
                            opcoes.ordem.push([index, 0]);
                            $(coluna).removeClass('tablesorter-headerDesc').addClass('tablesorter-headerAsc');
                        }
                    } else {
                        $(coluna).parent().find("th").removeClass('tablesorter-headerDesc').removeClass('tablesorter-headerAsc')
                        if (opcoes.ordem[0][0] != index) {
                            opcoes.ordem = [
                                [index, 0]
                            ];
                            $(coluna).removeClass('tablesorter-headerDesc').addClass('tablesorter-headerAsc');
                        } else {
                            if (opcoes.ordem[0][1] == 0) {
                                opcoes.ordem[0][1] = 1;
                                $(coluna).removeClass('tablesorter-headerAsc').addClass('tablesorter-headerDesc');
                            } else {
                                opcoes.ordem[0][1] = 0;
                                $(coluna).removeClass('tablesorter-headerDesc').addClass('tablesorter-headerAsc');
                            }
                        }
                    }
                    $(corpo).trigger("sorton", [opcoes.ordem]);
                }
            });
        });

        // Posiciona o cabeçalho criado para sempre estar no topo da div
        $(this).parent().scroll(function() {
            $(corpo).parent().children('.container_lista_cabecalho').css('top', $(this).scrollTop());
        });

        // Seleciona as linhas clicadas
        $(this).on('click', 'tr', function() {
            if (ctrlPressionada == false) {
                $(this).parent().find('tr.selecionado').removeClass('selecionado');
                $(this).addClass('selecionado');
            } else {
                if ($(this).attr("class") == "selecionado") {
                    $(this).removeClass('selecionado');
                } else {
                    $(this).addClass('selecionado');
                }
            }
        });

        // Seleciona as linhas clicadas com o botão direito do mouse
        $(this).on('contextmenu', 'tr', function() {
            $(this).click();
        });

        // Montar menu de contexto nos registros da lista
        if (opcoes.menu == "" && opcoes.formulario != "") {
            var objlista = $(this);

            // Encontra a tag do formulário da lista de registros
            var jan = $(this);
            while (jan.get(0).nodeName != "#document" && jan.get(0).nodeName != "FORM") {
                jan = jan.parent();
            }
            jan = jan.parent();

            // Abre formulário com dois cliques para alteração do registro selecionado
            $(objlista).off("dblclick", "tbody tr");
            $(objlista).on("dblclick", "tbody tr", function() {
                var condicao = "$Id$ == " + $(this).find("[name='id']").html();
                var acoes = [{
                    IdForm: opcoes.formulario,
                    Operacao: 2,
                    Condicao: condicao
                }];
                execAcaoAbreForm(jan, acoes);
            });

            // Atualiza lista de registros
            $(this).parent().unbind("Atualizar");
            $(this).parent().delegate($(this), "Atualizar", function(event) {
                setTimeout(function() {
                    var dados = consultaRegistros(jan, opcoes.formulario, opcoes.condicao);
                    $(objlista).tipagem("lista", {
                        menuopcoes: opcoes.menuopcoes,
                        valores: dados
                    });
                    $(objlista).change();
                }, 500);
                event.stopPropagation();
            });

            // Define as opções do menu de contexto
            opcoes.menu = {
                alias: $().funcoes.chaveUnica(),
                onShow: function(menu) {
                    // Habilita opções conforme parametros de habilitação das opções deste objeto
                    var itens = [];
                    if (opcoes.menuopcoes.atualizar)
                        itens.push("1");
                    if (opcoes.menuopcoes.incluir)
                        itens.push("2");
                    if ($($(this)).find("[class='selecionado']").length > 0) {
                        if (opcoes.menuopcoes.editar)
                            itens.push("3");
                        if (opcoes.menuopcoes.apagar)
                            itens.push("4");
                    }
                    menu.applyrule({
                        enable: true,
                        items: itens
                    });
                },
                width: 150,
                items: [{
                    text: "Atualizar",
                    icon: "img/atualizar.png",
                    alias: "1",
                    action: function(item) {
                        $(objlista).trigger("Atualizar");
                    }
                }, {
                    text: "Incluir",
                    icon: "img/criar-pq.png",
                    alias: "2",
                    action: function(item) {
                        // Abre formulário para criação de novo registro filho
                        var acoes = [{
                            IdForm: opcoes.formulario,
                            Operacao: 1,
                            Condicao: ""
                        }];
                        execAcaoAbreForm(jan, acoes);
                    }
                }, {
                    text: "Editar",
                    icon: "img/editar-pq.gif",
                    alias: "3",
                    action: function(item) {
                        // Abre formulário para alteração do registro selecionado
                        $(item).find(".selecionado").dblclick();
                    }
                }, {
                    text: "Apagar",
                    icon: "img/apagar-pq.png",
                    alias: "4",
                    action: function(item) {
                        // Apaga o registro no formulário de Itens da compra
                        var id = $(item).find(".selecionado").find("[name='id']").html();
                        apagaRegistro(opcoes.formulario, id);

                        // Remove o registro da lista de Itens de compra
                        $(item).find(".selecionado").remove();
                        $(objlista).change();
                    }
                }]
            }
        }

        // Monta o menu de contexto informado
        if (opcoes.menu != "") {
            $(this).unbind("contextmenu");
            $(this).contextmenu(opcoes.menu);
            $(this).parent().unbind("contextmenu");
            $(this).parent().contextmenu(opcoes.menu);
        }

        // Posiciona e dimensiona o campo na tela
        $(this).tipagem("posiciona", opcoes.horizontal, opcoes.vertical, opcoes.largura, opcoes.altura);

        // Torna o campo invisivel conforme a opcao informada
        if (opcoes.visivel != null) {
            $(this).parent().parent().tipagem("visivel", opcoes.visivel);
        }
    });
}

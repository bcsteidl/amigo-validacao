'use strict'

const opcoesImagem = require('./opcoes/imagem')

module.exports = function(parametros) {
    return this.each(function() {

        // Definindo valores padrões
        var opcoes = opcoesImagem($(this), parametros);

        // Adiciona classe e borda da imagem no formulário
        $(this).addClass("container_imagem").css({
            border: opcoes.borda + " solid #A6A6A6"
        });

        // Mostra imagem informada
        if (opcoes.imagem != "") {
            $(this).find("img").remove();
            // $('<img src="http://localhost:3000/images/' + opcoes.imagem + '"></img>').addClass("container_imagem_img").appendTo($(this));
            $('<img src="http://localhost:3000/images/' + opcoes.imagem.split("/")[opcoes.imagem.split("/").length - 1] + '"></img>').addClass("container_imagem_img").appendTo($(this));
        }

        // Posiciona e dimensiona o campo na tela
        $(this).tipagem("posiciona", opcoes.horizontal, opcoes.vertical, opcoes.largura, opcoes.altura);

        // Torna o campo invisivel conforme a opcao informada
        if (opcoes.visivel != null) {
            $(this).tipagem("visivel", opcoes.visivel);
        }

        // Configura o menu do botão direito do mouse
        if (opcoes.habilita) {
            var menuopcoes = {
                alias: $().funcoes.chaveUnica(),
                width: 150,
                items: [{
                    text: "Carregar",
                    icon: "img/editar-pq.gif",
                    alias: "1-0",
                    action: function(obj) {
                        // Mostra Tela para upload da imagem
                        if (opcoes.edita) {
                            var janup = $("<div/>", {
                                title: "Progresso"
                            }).css({
                                "background-color": "#CCDDDD",
                                "padding": "10px",
                                "border": "1px solid #000000",
                                "border-radius": "4px"
                            });

                            var campo = $(this);
                            $(janup).dialog({
                                autoOpen: true,
                                width: 300,
                                height: 100,
                                closeOnEscape: false,
                                closeText: "Fechar a janela",
                                resizable: false,
                                draggable: true,
                                modal: true,
                                open: function(event, ui) {
                                    var formulario = $('<form action="" enctype="multipart/form-data" method="post" name="form">');
                                    $(formulario).append($('<input id="fileup" type="file" style="display:none"/>'));
                                    $(formulario).append($('<br><progress id="progressbar" value="0" max="100"></progress>'));
                                    $(janup).append($(formulario));

                                    $(janup).find("#fileup").click();

                                    $(janup).find("#fileup").change(function() {
                                        var request = new XMLHttpRequest();
                                        request.upload.addEventListener("progress", function(event) {
                                            if (event.lengthComputable) {
                                                // Cálculo simples de porcentagem.
                                                var percent = Math.round(event.loaded * 100 / event.total);
                                                // Atualiza o valor da progress bar.
                                                document.getElementById('progressbar').value = percent;
                                            } else {
                                                // Não é possível computar o progresso =/
                                            }
                                        }, false);
                                        request.upload.addEventListener("loadend", function(event) {
                                            setTimeout(function() {
                                                $(obj).find("img").attr("src", "http://localhost:3000/images/" + document.getElementById('fileup').files[0].name);
                                                $(janup).dialog("close");
                                                $(janup).remove();
                                            }, 500);
                                        }, false);
                                        request.addEventListener("error", function(event) {
                                            alert("Erro ao efetuar upload do arquivo!");
                                        }, false);

                                        // Envia o Formulário
                                        var formData = new FormData();
                                        formData.append("file", document.getElementById('fileup').files[0]);
                                        request.open("POST", "http://localhost:3000/api/upload");
                                        request.send(formData);
                                    });
                                }
                            });
                        }
                    }
                }, {
                    text: "Apagar",
                    icon: "img/apagar-pq.png",
                    alias: "2-0",
                    action: function(obj) {
                        $(obj).children("img").attr("src", "http://localhost:3000/images/imagem_quebrada.png");
                    }
                }]
            };
            $(this).unbind("contextmenu");
            $(this).contextmenu(menuopcoes);
        }
    });
}

'use strict'

const opcoesMenu = require('./opcoes/menu')

module.exports = function(parametros) {
    return this.each(function() {
        var dadosant = {};

        // Definindo valores padrões
        var opcoes = opcoesMenu($(this), parametros);

        // Criar label para mostrar o rotulo, caso ele tenha sido definido
        if ($(this).data("tipado") != true) {
            $("<label>").appendTo($(this).parent()).append($(this));
            $(this).data("tipado", true);
        }
        $(this).parent().find("span").remove();
        if (opcoes.rotulo != "") {
            $(this).parent().append("<span>" + opcoes.rotulo + "</br></span").append($(this));
        }

        // Formata tipo e tamanho do fonte
        $(this).tipagem("fonte", opcoes.tipofonte, opcoes.tamfonte);

        // Posiciona e dimensiona o campo na tela
        $(this).tipagem("posiciona", opcoes.horizontal, opcoes.vertical, opcoes.largura, opcoes.altura);

        // Seta o campo conforme a forma de tratamento no sistema, mostra indicação no próprio campo
        $(this).tipagem("tratamento", opcoes.tratamento);

        // Torna o campo invisivel conforme a opcao informada
        if (opcoes.visivel != null) {
            $(this).tipagem("visivel", opcoes.visivel);
        }

        // Habilita ou desabilita o campo conforme a opcao informada
        if (opcoes.habilita != null) {
            $(this).tipagem("habilita", opcoes.habilita);
        }

        // Formata conforme campo de input texto normal
        $(this).addClass("ui-corner-all").css({
            "border": "2px inset",
            "border-image-source": "initial",
            "border-image-slice": "initial",
            "border-image-width": "initial",
            "border-image-outset": "initial",
            "border-image-repeat": "initial",
            "border-top-color": "rgb(238, 238, 238)",
            "border-left-color": "rgb(238, 238, 238)"
        });

        $(this).mouseover(function(key) {
            // Encontra form do menu e verifica alterações nos outros campos
            var form = $(this);
            while (form.get(0).nodeName != "#document" && form.get(0).nodeName != "FORM") {
                form = form.parent();
            }
            var dados = (form.get(0).nodeName == "FORM" ? form.json() : "{}");
            if (form.data("form_id") != undefined && form.data("form_id") != "") {
                dados.form_id = form.data("form_id");
            }
            dados = JSON.stringify(dados);

            // Criar as opções deste menu conforme o informado no parâmetro opções ou no parâmentro URL
            if (dados != dadosant && (opcoes.opcoes != "" || opcoes.url != "http://localhost:3000/api/menus" || opcoes.idmenu != 0)) {
                var campo = $(this);
                var valor = ($(this).val() == null ? 0 : $(this).val());
                var itens = "";
                if (opcoes.opcoes != "" && opcoes.url == "http://localhost:3000/api/menus" && opcoes.idmenu == 0) {
                    $.each(opcoes.opcoes, function(indice, opcao) {
                        if (opcao.valor != valor) {
                            itens += "<option value='" + opcao.valor + "'>" + opcao.descricao + "</option>";
                        } else {
                            itens += "<option value='" + opcao.valor + "' selected>" + opcao.descricao + "</option>";
                        }
                    });
                    campo.html(itens);
                } else if (opcoes.url != "http://localhost:3000/api/menus" || (opcoes.idmenu != 0 && typeof(opcoes.idmenu) == "number")) {
                    $.ajax({
                        type: 'PATCH',
                        url: opcoes.url + "/" + opcoes.idmenu,
                        dataType: 'json',
                        contentType: 'application/json',
                        async: true,
                        cache: false,
                        timeout: 30000,
                        headers: {
                            "authorization": localStorage.getItem("token")
                        },
                        data: dados,
                        success: function(retorno) {
                            if (!$().funcoes.verificaErro(retorno)) { // Verifica se houve erro no retorno e apresenta na tela
                                $.each(retorno.dados, function(indice, opcao) {
                                    if (opcao.valor != valor) {
                                        itens += "<option value='" + opcao.valor + "'>" + opcao.descricao + "</option>";
                                    } else {
                                        itens += "<option value='" + opcao.valor + "' selected>" + opcao.descricao + "</option>";
                                    }
                                });
                                campo.html(itens);
                            }
                        },
                        error: function(xmlHttpRequest, status, err) {
                            console.log("Não foi possível completar a comunicação com o servidor:");
                            console.log(xmlHttpRequest);
                        }
                    });
                }
                dadosant = dados;
            }
        });

        $(this).focusin(function(key) {
            // Coloca borda de foco no campo
            $(this).parent().find("a").css({
                "outline": "-webkit-focus-ring-color auto 5px"
            });
            $(this).mouseover();
        });

        $(this).focusout(function(key) {
            // Retira borda de foco no campo
            $(this).parent().find("a").css({
                "outline": "none"
            });
        });

        $(this).keypress(function(key) {
            // Formata o valor do campo para apresentação se não for modo aoconsultar
            if ($("#_btn_consultar").attr("disabled")) {
                if (opcoes.tamanho > 0 && $(this).val().length >= opcoes.tamanho) {
                    key.preventDefault();
                }
            }
        });

        $(this).bind('paste', function() {
            var el = $(this);
            setTimeout(function() {
                // Limita o tamanho do campo com o tamanho informado nas opções
                el.tipagem("formata", "caracter", opcoes.tamanho);
            }, 100);
        });
    });
}

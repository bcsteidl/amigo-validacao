/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 50);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(seletor, opcoesJS) {
    var defaults = {
        rotulo: "",
        horizontal: "0px",
        vertical: "0px",
        largura: "100px",
        altura: "16px",
        tamanho: 0,
        habilita: !seletor.is(":disabled"),
        visivel: seletor.is(":visible"),
        tratamento: 0,
        tipofonte: "\"Times New Roman\", \"Arial\", \"Courier New\", \"Sans-Serif\"",
        tamfonte: "13px"
    };
    var opcoesHTML = {
        rotulo: seletor.data("rotulo"),
        horizontal: seletor.data("horizontal"),
        vertical: seletor.data("vertical"),
        largura: seletor.data("largura"),
        altura: seletor.data("altura"),
        tamanho: seletor.data("tamanho"),
        habilita: seletor.data("habilita"),
        visivel: (seletor.data("visivel") != false ? true : false),
        edita: seletor.data("edita"),
        tratamento: seletor.data("tratamento"),
        tipofonte: seletor.data("tipofonte"),
        tamfonte: seletor.data("tamfonte")
    };

    var opcoes = $.extend({}, defaults, opcoesHTML);
    opcoes = $.extend({}, opcoes, opcoesJS);

    return opcoes;
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var metodos = {
    init: __webpack_require__(25),
    recursiva: __webpack_require__(45),
    destroy: __webpack_require__(17),
    caracter: __webpack_require__(13),
    senha: __webpack_require__(46),
    inteiro: __webpack_require__(26),
    decimal: __webpack_require__(16),
    booleano: __webpack_require__(10),
    data: __webpack_require__(14),
    hora: __webpack_require__(23),
    datahora: __webpack_require__(15),
    menu: __webpack_require__(28),
    botao: __webpack_require__(11),
    etiqueta: __webpack_require__(18),
    imagem: __webpack_require__(24),
    caixa: __webpack_require__(12),
    lista: __webpack_require__(27),
    pastas: __webpack_require__(43),
    fonte: __webpack_require__(19),
    posiciona: __webpack_require__(44),
    tratamento: __webpack_require__(48),
    visivel: __webpack_require__(49),
    habilita: __webpack_require__(22),
    opaco: __webpack_require__(31),
    formata: __webpack_require__(20),
    getSelectionStart: __webpack_require__(21),
    setSelection: __webpack_require__(47)
};

module.exports = function(metodo) {

    if (metodos[metodo]) {
        return metodos[metodo].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof metodo === 'object' || !metodo) {
        return metodos.init.apply(this, arguments);
    } else {
        $.error('Metodo ' + metodo + ' não existe neste plugin...');
    }

}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(5)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../node_modules/css-loader/index.js!./validacao.css", function() {
			var newContent = require("!!./../node_modules/css-loader/index.js!./validacao.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".ui-datepicker-trigger {\n\tposition: relative;\n\tbackground: url(" + __webpack_require__(9) + ");\n\tbackground-size: 100% 100%;\n\twidth: 23px;\n\theight: 25px;\n\tbackground-repeat: no-repeat;\n}\n\n.container_lista {\n\tposition: absolute;\n\tborder: 1px solid #A6A6A6;\n\toverflow: auto;\n\tmargin-left: -1px;\n\tmargin-top: 2px;\n\tbackground: #FFFFDD;\n}\n\n.container_lista_cabecalho {\n\tposition: absolute;\n\tborder-collapse: collapse;\n\tz-index: 5;\n}\n\n.container_lista_corpo {\n\tborder-collapse: collapse;\n\tz-index: 10;\n}\n\n.container_lista th, td {\n\tborder: 1px solid #B6B6B6;\n\tfont-size: 12px;\n}\n\n.container_lista_corpo tbody {\n\tbackground-color: #FFFFCC;\n\tcursor: pointer;\n}\n\n.selecionado {\n\tbackground-color: #A9D0F5;\n}\n\n.alterado {\n\tfont-style: italic;\n\tfont-weight: bold;\n}\n\n.tablesorter-header {\n\tbackground-image: url(" + __webpack_require__(7) + ");\n\tbackground-repeat: no-repeat;\n\tbackground-position: center right;\n\tbackground-color: #D6D6D6;\n\tcursor: pointer;\n}\n\n.tablesorter-header-inner {\n\tfont-size: 13px;\n}\n\n.tablesorter-headerAsc {\n\tbackground-image: url(" + __webpack_require__(6) + ");\n}\n\n.tablesorter-headerDesc {\n\tbackground-image: url(" + __webpack_require__(8) + ");\n}\n\n.container_imagem {\n\tposition: absolute;\n\tpadding: 0px;\n\tmargin: 0px;\n\t-moz-border-radius: 4px;\n\t-webkit-border-radius: 4px;\n\t-o-border-radius: 4px;\n\t-ms-border-radius: 4px;\n\tborder-radius: 4px;\n}\n\n.container_imagem_img {\n\twidth: 100%;\n\theight: 100%;\n\tpadding: 0px;\n\tmargin: 0px;\n}\n\n#progressbar {\n\ttop: 10px;\n\twidth: 100%;\n}\n\n.ui-widget .ui-widget {\n    font-size: 0.88em;\n}\n\n.ui-spinner-input {\n    padding: 0 0 0.1em;\n}\n", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,R0lGODlhFQAEAIAAACMtMP///yH5BAEAAAEALAAAAAAVAAQAAAINjB+gC+jP2ptn0WskLQA7"

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,R0lGODlhFQAJAIAAACMtMP///yH5BAEAAAEALAAAAAAVAAkAAAIXjI+AywnaYnhUMoqt3gZXPmVg94yJVQAAOw=="

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,R0lGODlhFQAEAIAAACMtMP///yH5BAEAAAEALAAAAAAVAAQAAAINjI8Bya2wnINUMopZAQA7"

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH1gELCgQR4ZmbAwAAA6tJREFUOMu1lWtoHFUUx3/3scm+8liqQWq6USEptQpCmlaQoNha+0UQkxAxhmiRJh8EA5bQRmkjbUKyUagRa03FflNKabFfRakm9YMtbZCWFK3WRwux7iOJ2ffM7PWDm7CzqRUqXjjcOf879zfn3DlzBv6nIcqFox9NHoknor3A0J6BN95a1kcjwyZUu8bXu6svW/T3A0MFR2wZ3Dt4rpwjS50PJ4/UxxPR3k3NLaeBJ8pvrq6u8pa4L4Vq1/wklfn2thGPvT2y2xTM+J2mLqXcN7B774FVC2PjIzeNMWY0Mmymz06Z8nErffrslBmNDBtjjPn0+CfflPJ0aaaO4wCQXEoxNze36uHZTM6la/X3dtu2SSWTD3V0tjWfOH7ywsoZd3S2NWutBcAD9zXy3aWLq6B//B5fpX09fYZHNz+GEIKKygrfLV9eTU2NdByH1tZWXnyhB4Dfrt/g6MfHsG2b/v5+bKfAy7v66N75Ct//cJWe7p00NTVhjKEqGJTAgy5wXV3dhmCgCgBjDFJKPv/iS4bHIpz87DSO46C15sSpU+zY/hRbWloYP/QuxhgA4vE49fVhsfbetbUusNdbeb/P63WV3vZtW5l4x10kB4f209neRihUS4XWRWgMgPVN66WVtx5xgZVS9/gCfpHP5/+1rObn5zkzNc22rU8Sj8cQQiCkQGsPfr+v3gWWUt0dDAQRQtwWurC4yL4Dw3R1dhDw+4nGYiRTKWZnZ7FtC9t2NrjKLZvNNHi9XmFZ1j9CjTG8PrCHhzduJOAPIESaRDxKoqRYtNYhFzifz9cFA9XYtu2Caa15ta8Xn8+Hx+MhZ1n8euM62a+yNITD1FT7aXuunUwmzeXLlxBCBN0R57J3BYOBFaBSCqUUUko6O9qRUqKU4tjkBywszLO09CfZXJ5ffr5GMplkZmaGdDpFKpUqlEVsab/fL5TS+Hw+pJRIKRFCrMxKKcLrwoTXhcnlsiil2LyphfPnz5HOpKmtDSGFYCRyUA8OvGkLgO6erte01of+S//VWuOtrJx6b+Lw467u9nxX183Gxoa6O23n8cSCOTzxvixvQjoai1589pmnd1hWHmNMmRVWaYWCe/3KlauiyLMBsQwuxGKJH0ciExcMaGMKHmPwGIzGIKEgMUZgEAgMUhZAOgIsIYSNwNJKXQNUEWxESU4VQBDwA14gUOJ7ips0kAHyQBpYBFJArjhnimDXP08Uv0RZcu0pOS4BmKI5QKEIcZazLhoAfwFSY6R+pYBgLwAAAABJRU5ErkJggg=="

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const opcoesBooleano = __webpack_require__(0)

module.exports = function(parametros) {
    return this.each(function() {

        // Definindo valores padrões
        var opcoes = opcoesBooleano($(this), parametros);

        // Criar label para mostrar o rotulo, caso ele tenha sido definido
        if ($(this).data("tipado") != true) {
            $("<label>").appendTo($(this).parent()).append($(this));
            $(this).data("tipado", true);
        }
        $(this).parent().find("span").remove();
        if (opcoes.rotulo != "") {
            $(this).parent().append("<span>" + opcoes.rotulo + "</br></span").append($(this));
        }

        // Posiciona e dimensiona o campo na tela
        $(this).tipagem("posiciona", opcoes.horizontal, opcoes.vertical, opcoes.largura, opcoes.altura);

        // Centraliza a caixa de marcação para o Browser Firefox
        // if (Browser.Firefox) {
        //  $(this).css("position","relative").css("left","40%");
        // }

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
    });
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const opcoesBotao = __webpack_require__(32)

module.exports = function(parametros) {
    return this.each(function() {

        // Definindo valores padrões
        var opcoes = opcoesBotao($(this), parametros);

        // Mostrar o rotulo, caso ele tenha sido definido
        $(this).addClass("ui-corner-all").html(opcoes.rotulo);

        // Mostrar a imagem, caso ela tenha sido definida
        if (opcoes.rotulo == "" && opcoes.imagem != "" && opcoes.imagem != "img/imagem_quebrada.png") {
            $(this).find("img").remove();
            $(this).html("<img src=" + opcoes.diretorio + opcoes.imagem + ">");
        }

        // Formata tipo e tamanho do fonte
        $(this).tipagem("fonte", opcoes.tipofonte, opcoes.tamfonte);

        // Cria uma div para possibilitar a movimentação e redimensionamento na montagem das telas
        if ($(this).data("tipado") != true) {
            $("<div>").css("position", "absolute").appendTo($(this).parent()).append($(this));
            $(this).data("tipado", true);
        }

        // Posiciona e dimensiona o botão na tela
        $(this).tipagem("posiciona", opcoes.horizontal, opcoes.vertical, opcoes.largura, opcoes.altura);

        // Habilita ou desabilita o botão conforme a opcao informada
        if (opcoes.habilita != null) {
            $(this).tipagem("habilita", opcoes.habilita);
        }

        // Torna o botão invisivel conforme a opcao informada
        if (opcoes.visivel != null) {
            $(this).tipagem("visivel", opcoes.visivel);
        }
    });
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const opcoesCaixa = __webpack_require__(33)

module.exports = function(parametros) {
    return this.each(function() {

        // Definindo valores padrões
        var opcoes = opcoesCaixa($(this), parametros);

        // Define tamanho da borda e cor de fundo
        $(this).addClass("container_imagem").css({
            position: "absolute",
            border: opcoes.borda + " solid #A6A6A6",
            background: opcoes.corfundo
        });

        // Posiciona e dimensiona o campo na tela
        $(this).tipagem("posiciona", opcoes.horizontal, opcoes.vertical, opcoes.largura, opcoes.altura);

        // Torna o campo invisivel conforme a opcao informada
        if (opcoes.visivel != null) {
            $(this).tipagem("visivel", opcoes.visivel);
        }
    });
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const opcoesCaracter = __webpack_require__(34)

const Browser = {
    Chrome: (navigator.userAgent.indexOf("Chrome") >= 0 ? true : false),
    Firefox: (navigator.userAgent.indexOf("Firefox") >= 0 ? true : false),
    Opera: (navigator.userAgent.indexOf("Opera") >= 0 ? true : false),
    IE: (navigator.userAgent.indexOf("IE") >= 0 ? true : false)
};

module.exports = function(parametros) {
    return this.each(function() {

        // Definindo valores padrões
        var opcoes = opcoesCaracter($(this), parametros);

        // Desligando o campos de edição se ele ja existir para não confundir a formatação do campo
        if ($(this).data("tipado") && opcoes.edita) {
            var tag = $(this).parent()
            $(tag).parent().append($(this))
            $(tag).remove()
        }

        // Criar label para mostrar o rotulo, caso ele tenha sido definido
        if ($(this).data("tipado") != true) {
            $("<label>").appendTo($(this).parent()).append($(this));
            $(this).data("tipado", true);
        }
        $(this).parent().find("span").remove();
        if (opcoes.rotulo != "") {
            $(this).parent().append("<span>" + opcoes.rotulo + "</br></span>").append($(this));
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

        // Formata textarea conforme campo de input texto normal
        $(this).addClass("ui-corner-all")

        // Mostra botão de edição do texto do campo
        if (opcoes.edita && !$(this).is("textarea")) {
            // Reduz o tamanho do campo para conter o botão
            $(this).width($(this).width()-23)
            $(this).css("padding-right", "18px")

            // Encapsula o input em um span para controlar o botão de edição
            $("<span/>", {
                class: "ui-spinner ui-corner-all ui-widget ui-widget-content"
            }).appendTo($(this).parent()).append($(this))

            // Cria o botão para edição do conteúdo do campo
            const campo = $(this)
            $("<a/>", {
                tabindex: -1,
                right: "2px",
                height: $(this).height(),
                class: "ui-button ui-widget ui-spinner-button ui-spinner-up ui-corner-right ui-button-icon-only"
            }).append($("<span/>", {
                class: "ui-button-icon ui-icon ui-icon-clipboard"
            })).click(function() {
                var jan = $("<div/>", {
                    title: campo.parent().text()
                }).css({
                    "background-color": "#CCDDDD",
                    "padding": "10px",
                    "border": "1px solid #000000",
                    "border-radius": "4px"
                });

                $(jan).append($("<textarea wrap='hard' id='teste'>" + campo.val() + "</textarea>").addClass("ui-corner-all").css({
                    "position": "static",
                    "width": "99%",
                    "height": "87%"
                }));

                $(jan).append($("<button>OK</button>").addClass("ui-corner-all").css({
                    "position": "absolute",
                    "right": "20%",
                    "bottom": "1%",
                    "width": "17%",
                    "type": "button",
                    "class": "btn"
                }).click(function() {
                    campo.val($(this).parent().children("textarea").val());
                    $(jan).dialog("close");
                }));

                $(jan).append($("<button>Cancelar</button>").addClass("ui-corner-all").css({
                    "position": "absolute",
                    "right": "2%",
                    "bottom": "1%",
                    "width": "17%",
                    "type": "button",
                    "class": "btn"
                }).click(function() {
                    $(jan).dialog("close");
                }));

                $(jan).dialog({
                    autoOpen: true,
                    width: 600,
                    height: 301,
                    minWidth: 400,
                    minHeight: 160,
                    closeOnEscape: false,
                    closeText: "Fechar a janela",
                    resizable: true,
                    draggable: true,
                    modal: true
                });
            }).appendTo($(this).parent()).css({
                "top": "2px",
                "right": "2px"
            })
        }

        $(this).focusin(function(key) {
            $(this).parent().find("a").css({
                "outline": "-webkit-focus-ring-color auto 5px"
            });
        });

        $(this).focusout(function(key) {
            // Formata o valor do campo para apresentação se não for modo aoconsultar
            if ($("#_btn_consultar").attr("disabled")) {
                $(this).parent().find("a").css({
                    "outline": "none"
                });
            }
        });

        $(this).keypress(function(key) {
            // Limita o tamanho do campo com o tamanho informado nas opções se não for modo ao consultar
            if ($("#_btn_consultar").attr("disabled")) {
                if (opcoes.tamanho > 0 && $(this).val().length >= opcoes.tamanho) {
                    key.preventDefault();
                }
            }
        });

        $(this).bind('paste', function() {
            // Formata o valor do campo para apresentação se não for modo aoconsultar
            if ($("#_btn_consultar").attr("disabled")) {
                var el = $(this);
                setTimeout(function() {
                    // Limita o tamanho do campo com o tamanho informado nas opções
                    el.tipagem("formata", "caracter", opcoes.tamanho);
                }, 100);
            }
        });
    });
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(parametros) {
    return this.each(function() {
        $(this).tipagem("datahora", parametros);
    });
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const opcoesDataHora = __webpack_require__(35)

const Browser = {
    Chrome: (navigator.userAgent.indexOf("Chrome") >= 0 ? true : false),
    Firefox: (navigator.userAgent.indexOf("Firefox") >= 0 ? true : false),
    Opera: (navigator.userAgent.indexOf("Opera") >= 0 ? true : false),
    IE: (navigator.userAgent.indexOf("IE") >= 0 ? true : false)
};

module.exports = function(parametros) {
    return this.each(function() {

        // Definindo valores padrões
        var opcoes = opcoesDataHora($(this), parametros);

        // Desligando o datetimepicker se ele ja existir para não confundir a formatação do campo
        if ($(this).data("tipado") && opcoes.edita) {
            $(this).datetimepicker("destroy");
            var tag = $(this).parent()
            $(tag).parent().append($(this))
            $(tag).remove()
        }

        // Criar label para mostrar o rotulo, caso ele tenha sido definido
        $(this).addClass("ui-corner-all")
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

        // Seleciona tipo DataHora, Data ou Hora
        switch (opcoes.tipo.toLowerCase()) {
            case "datahora":
                $(this).datetimepicker({
                    showOn: (opcoes.edita && opcoes.habilita ? "button" : ""),
                    // showOn: "",
                    showButtonPanel: false,
                    dateFormat: 'dd/mm/yy',
                    timeFormat: 'HH:mm:ss',
                    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
                    dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
                    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
                    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
                    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                    timeOnlyTitle: 'Escolha a Hora',
                    timeText: 'Tempo',
                    hourText: 'Hora',
                    minuteText: 'Minutos',
                    secondText: 'Segundos'
                });
                break;
            case "data":
                $(this).datepicker({
                    showOn: (opcoes.edita && opcoes.habilita ? "button" : ""),
                    showButtonPanel: false,
                    dateFormat: 'dd/mm/yy',
                    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
                    dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
                    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
                    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
                    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
                });
                break;
            case "hora":
                $(this).timepicker({
                    showOn: (opcoes.edita && opcoes.habilita ? "button" : ""),
                    showButtonPanel: false,
                    timeFormat: 'HH:mm:ss',
                    timeOnlyTitle: 'Escolha a Hora',
                    timeText: 'Tempo',
                    hourText: 'Hora',
                    minuteText: 'Minutos',
                    secondText: 'Segundos'
                });
                break;
        }

        // Posiciona Habilita o botão de edição do calendario dos campos Data Hora
        if (opcoes.edita && opcoes.habilita && opcoes.visivel == true) {
            // Esconde o bottão original criado pelo datepicker
            $(this).parent().children("button").hide()

            // Encapsula o input em um span para controlar o botão de edição
            $("<span/>", {
                class: "ui-spinner ui-corner-all ui-widget ui-widget-content"
            }).appendTo($(this).parent()).append($(this))

            // Cria o botão para edição do conteúdo do campo
            const campo = $(this)
            $("<a/>", {
                tabindex: -1,
                right: "2px",
                height: $(this).height(),
                class: "ui-button ui-widget ui-spinner-button ui-spinner-up ui-corner-right ui-button-icon-only"
            }).append($("<span/>", {
                class: "ui-button-icon ui-icon ui-icon-calendar"
            })).click(function() {
                $(this).parent().children("button").click()
            }).appendTo($(this).parent()).css({
                "top": "2px",
                "right": "2px"
            })
        }

        $(this).keypress(function(key) {
            // Limita o tamanho do campo com o tamanho informado nas opções se não for modo ao consultar
            if ($("#_btn_consultar").attr("disabled")) {
                if (opcoes.tamanho > 0 && $(this).val().length >= (opcoes.tamanho + 2)) {
                    key.preventDefault();
                }
            }
        });

        $(this).bind('paste', function() {
            var el = $(this);
            setTimeout(function() {
                // Limita o tamanho do campo com o tamanho informado nas opções
                el.tipagem("formata", "data", opcoes.tamanho);
            }, 100);
        });
    });
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const opcoesDecimal = __webpack_require__(36)

module.exports = function(parametros) {
    return this.each(function() {
        // Desligando o spinner se ele ja existir para não confundir a formatação do campo
        if ($(this).parent().hasClass("ui-spinner"))
            $(this).spinner("destroy");

        // Definindo valores padrões
        var opcoes = opcoesDecimal($(this), parametros);

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
        $(this).css("text-align", "right");

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

        // Mostra botão de edição do numero no campo
        if (opcoes.edita && opcoes.visivel == true) {
            $(this).width($(this).width() - 17);
            var div = 1;
            for (var i = 1; i <= opcoes.decimal; i++) {
                div = div / 10;
            }
            $(this).spinner({
                min: opcoes.minimo,
                max: opcoes.maximo,
                step: div,
                numberFormat: "n" + opcoes.decimal
            });
            $(this).css("padding-right", "2px")

            // Formata conforme campo de input texto normal
            $(this).parent().css({
                "border": "2px inset",
                "border-image-source": "initial",
                "border-image-slice": "initial",
                "border-image-width": "initial",
                "border-image-outset": "initial",
                "border-image-repeat": "initial",
                "border-top-color": "rgb(238, 238, 238)",
                "border-left-color": "rgb(238, 238, 238)"
            });
            $(this).css({
                "margin": "0px",
                "margin-right": "18px",
                "vertical-align": "top"
            });
        }

        $(this).focusin(function(key) {
            // Retira os pontos de milhar
            $(this).val($(this).val().replace(/\./g, ""));
        });

        $(this).keypress(function(key) {
            // Limita o tamanho do campo com o tamanho informado nas opções se não for modo ao consultar
            if ($("#_btn_consultar").attr("disabled")) {
                if (opcoes.tamanho > 0 && $(this).val().replace(/\D/g, "").length >= (opcoes.tamanho)) {
                    key.preventDefault();
                }
            }
        });

        $(this).focusout(function(key) {
            // Formata o valor do campo para apresentação se não for modo aoconsultar
            if ($("#_btn_consultar").attr("disabled")) {
                $(this).tipagem("formata", "decimal", opcoes.tamanho, opcoes.decimal);
            }
        });

        $(this).bind('paste', function(key) {
            // Formata o valor do campo para apresentação se não for modo aoconsultar
            if ($("#_btn_consultar").attr("disabled")) {
                var el = $(this);
                setTimeout(function() {
                    // Formata o valor do campo para apresentação
                    el.tipagem("formata", "decimal", opcoes.tamanho, opcoes.decimal);
                }, 100);
            }
        });
    });
}


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function() {
    return this.each(function() {

    })
}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const opcoesEtiqueta = __webpack_require__(37)

module.exports = function(parametros) {
    return this.each(function() {

        // Definindo valores padrões
        var opcoes = opcoesEtiqueta($(this), parametros);

        // Mostrar o rotulo, caso ele tenha sido definido
        if (opcoes.rotulo != "") {
            $(this).html(opcoes.rotulo);
        }

        // Definir a cor de fundo
        $(this).css("background", opcoes.corfundo);
        $(this).addClass("ui-corner-all").css("overflow", "hidden");

        // Formata tipo e tamanho do fonte
        $(this).tipagem("fonte", opcoes.tipofonte, opcoes.tamfonte);

        // Cria uma div para possibilitar a movimentação e redimensionamento na montagem das telas
        if ($(this).data("tipado") != true) {
            $("<div>").css("position", "absolute").appendTo($(this).parent()).append($(this));
            $(this).data("tipado", true);
        }

        // Posiciona e dimensiona o rotulo na tela
        $(this).tipagem("posiciona", opcoes.horizontal, opcoes.vertical, opcoes.largura, opcoes.altura);

        // Torna o rotulo invisivel conforme a opcao informada
        if (opcoes.visivel != null) {
            $(this).tipagem("visivel", opcoes.visivel);
        }
    });
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(tipofonte, tamfonte) {

    // Define tipo e tamanho da fonte de cadacteres
    $(this).css("font-family", tipofonte);
    $(this).css("font-size", tamfonte);
}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function() {
    if (this.lengh == 0)
        return -1;
    input = this[0];

    var pos = input.value.length;

    if (input.createTextRange) {
        var r = document.selection.createRange().duplicate();
        r.moveEnd('character', input.value.length);
        if (r.text == '')
            pos = input.value.length;
        pos = input.value.lastIndexOf(r.text);
    } else if (typeof(input.selectionStart) != "undefined")
        pos = input.selectionStart;

    return pos;
}


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(opcao) {
    var retorno = undefined;

    if (opcao == undefined) {
        // Retorna habilitação atual
        retorno = !$(this).attr("disabled");
    } else {
        if (opcao == true) {
            $(this).attr("disabled", false);
            if ($(this).is("select"))
                $(this).css({
                    "background-color": "#FFFFFF",
                    "color": "black"
                });
        } else {
            $(this).attr("disabled", true);
            if ($(this).is("select"))
                $(this).css({
                    "background-color": "#DFDFDF",
                    "color": "#545454"
                });
        }
    }
    return retorno;
}


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(parametros) {
    return this.each(function() {
        $(this).tipagem("datahora", parametros);
    });
}


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const opcoesImagem = __webpack_require__(38)

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


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(parametros) {
    return this.each(function() {
        if (typeof(parametros) == "undefined") {
            $(this).tipagem($(input).data("tipo").toLowerCase());
        } else {
            $(this).tipagem(parametros.tipo.toLowerCase(), parametros);
        }
    });
}


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const opcoesInteiro = __webpack_require__(39)

module.exports = function(parametros) {
    return this.each(function() {

        // Desligando o spinner se ele ja existir para não confundir a formatação do campo
        if ($(this).parent().hasClass("ui-spinner"))
            $(this).spinner("destroy");

        // Definindo valores padrões
        var opcoes = opcoesInteiro($(this), parametros);

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
        $(this).css("text-align", "right");

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

        // Mostra botão de edição do numero no campo
        if (opcoes.edita && opcoes.habilita) {
            $(this).width($(this).width() - 17);
            $(this).spinner({
                min: opcoes.minimo,
                max: opcoes.maximo,
                step: 1,
                numberFormat: "n0"
            });
            $(this).css("padding-right", "2px")

            // Formata conforme campo de input texto normal
            $(this).parent().css({
                "border": "2px inset",
                "border-image-source": "initial",
                "border-image-slice": "initial",
                "border-image-width": "initial",
                "border-image-outset": "initial",
                "border-image-repeat": "initial",
                "border-top-color": "rgb(238, 238, 238)",
                "border-left-color": "rgb(238, 238, 238)"
            });
            $(this).css({
                "margin": "0px",
                "margin-right": "18px",
                "vertical-align": "top"
            });
        } else {
            $(this).addClass("ui-corner-all")
        }

        $(this).focusin(function(key) {
            // Retira os pontos de milhar
            $(this).val($(this).val().replace(/\./g, ""));
        });

        $(this).keypress(function(key) {
            // Limita o tamanho do campo com o tamanho informado nas opções se não for modo ao consultar
            if ($("#_btn_consultar").attr("disabled")) {
                if (opcoes.tamanho > 0 && $(this).val().replace(/\D/g, "").length >= (opcoes.tamanho)) {
                    key.preventDefault();
                }
            }
        });

        $(this).focusout(function(key) {
            // Formata o valor do campo para apresentação se não for modo aoconsultar
            if ($("#_btn_consultar").attr("disabled")) {
                var el = $(this);
                setTimeout(function() {
                    el.tipagem("formata", "inteiro", opcoes.tamanho, 0);
                }, 100);
            }
        });


        $(this).bind('paste', function(key) {
            // Formata o valor do campo para apresentação se não for nmodo aocpnsultar
            if ($("#_btn_consultar").attr("disabled")) {
                var el = $(this);
                setTimeout(function() {
                    el.tipagem("formata", "inteiro", opcoes.tamanho);
                }, 100);
            }
        });
    });
}


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const opcoesLista = __webpack_require__(40)
const montaTabela = __webpack_require__(30)

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


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const opcoesMenu = __webpack_require__(41)

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


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const montaRegistros = __webpack_require__(29)

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


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(opcao) {
    var retorno = undefined;

    // Se o pai for um Label obtem o objeto pai, senão obtem o objeto filho
    var obj = ($(this).parent().is('label') || $(this).parent().parent().is('label') ? $(this).parent() : $(this));
    if (opcao == undefined) {
        // Retorna opacidade atual
        retorno = obj.css("opacity");
    } else {
        obj.css("opacity", opcao);
    }
    return retorno;
}


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(seletor, opcoesJS) {
    var defaults = {
        rotulo: "",
        imagem: "",
        diretorio: "",
        horizontal: "0px",
        vertical: "0px",
        largura: "100px",
        altura: "100px",
        habilita: !seletor.is(":disabled"),
        visivel: seletor.is(":visible"),
        tipofonte: "\"Times New Roman\", \"Arial\", \"Courier New\", \"Sans-Serif\"",
        tamfonte: "13px"
    };
    var opcoesHTML = {
        rotulo: seletor.data("rotulo"),
        imagem: seletor.data("imagem"),
        diretorio: seletor.data("diretorio"),
        horizontal: seletor.data("horizontal"),
        vertical: seletor.data("vertical"),
        largura: seletor.data("largura"),
        altura: seletor.data("altura"),
        habilita: seletor.data("habilita"),
        visivel: (seletor.data("visivel") != false ? true : false),
        tipofonte: seletor.data("tipofonte"),
        tamfonte: seletor.data("tamfonte")
    };

    var opcoes = $.extend({}, defaults, opcoesHTML);
    opcoes = $.extend({}, opcoes, opcoesJS);

    return opcoes;
}


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(seletor, opcoesJS) {
    var defaults = {
        rotulo: "",
        horizontal: "0px",
        vertical: "0px",
        largura: "100px",
        altura: "100px",
        visivel: seletor.is(":visible"),
        borda: "1px",
        corfundo: "#D6D6D6"
    };
    var opcoesHTML = {
        rotulo: seletor.data("rotulo"),
        horizontal: seletor.data("horizontal"),
        vertical: seletor.data("vertical"),
        largura: seletor.data("largura"),
        altura: seletor.data("altura"),
        visivel: (seletor.data("visivel") != false ? true : false),
        borda: seletor.data("borda"),
        corfundo: seletor.data("corfundo")
    };

    var opcoes = $.extend({}, defaults, opcoesHTML);
    opcoes = $.extend({}, opcoes, opcoesJS);

    return opcoes;
}


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(seletor, opcoesJS) {
    var defaults = {
        rotulo: "",
        horizontal: "0px",
        vertical: "0px",
        largura: "100px",
        altura: "16px",
        tamanho: 0,
        habilita: !seletor.is(":disabled"),
        visivel: seletor.is(":visible"),
        edita: true,
        tratamento: 0,
        tipofonte: "\"Times New Roman\", \"Arial\", \"Courier New\", \"Sans-Serif\"",
        tamfonte: "13px"
    };
    var opcoesHTML = {
        rotulo: seletor.data("rotulo"),
        horizontal: seletor.data("horizontal"),
        vertical: seletor.data("vertical"),
        largura: seletor.data("largura"),
        altura: seletor.data("altura"),
        tamanho: seletor.data("tamanho"),
        habilita: seletor.data("habilita"),
        visivel: (seletor.data("visivel") != false ? true : false),
        edita: seletor.data("edita"),
        tratamento: seletor.data("tratamento"),
        tipofonte: seletor.data("tipofonte"),
        tamfonte: seletor.data("tamfonte")
    };

    var opcoes = $.extend({}, defaults, opcoesHTML);
    opcoes = $.extend({}, opcoes, opcoesJS);

    return opcoes;
}


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(seletor, opcoesJS) {
    var defaults = {
        tipo: "datahora",
        rotulo: "",
        horizontal: "0px",
        vertical: "0px",
        largura: "100px",
        altura: "16px",
        tamanho: 19,
        habilita: !seletor.is(":disabled"),
        visivel: seletor.is(":visible"),
        edita: true,
        tratamento: 0,
        tipofonte: "\"Times New Roman\", \"Arial\", \"Courier New\", \"Sans-Serif\"",
        tamfonte: "13px"
    };
    var opcoesHTML = {
        tipo: seletor.data("tipo"),
        rotulo: seletor.data("rotulo"),
        horizontal: seletor.data("horizontal"),
        vertical: seletor.data("vertical"),
        largura: seletor.data("largura"),
        altura: seletor.data("altura"),
        tamanho: seletor.data("tamanho"),
        habilita: seletor.data("habilita"),
        visivel: (seletor.data("visivel") != false ? true : false),
        edita: seletor.data("edita"),
        tratamento: seletor.data("tratamento"),
        tipofonte: seletor.data("tipofonte"),
        tamfonte: seletor.data("tamfonte")
    };

    var opcoes = $.extend({}, defaults, opcoesHTML);
    opcoes = $.extend({}, opcoes, opcoesJS);

    return opcoes;
}


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(seletor, opcoesJS) {
    var defaults = {
        rotulo: "",
        horizontal: "0px",
        vertical: "0px",
        largura: "50px",
        altura: "16px",
        tamanho: 0,
        decimal: 2,
        minimo: null,
        maximo: null,
        habilita: !seletor.is(":disabled"),
        visivel: seletor.is(":visible"),
        edita: true,
        tratamento: 0,
        tipofonte: "\"Times New Roman\", \"Arial\", \"Courier New\", \"Sans-Serif\"",
        tamfonte: "13px"
    };
    var opcoesHTML = {
        rotulo: seletor.data("rotulo"),
        horizontal: seletor.data("horizontal"),
        vertical: seletor.data("vertical"),
        largura: seletor.data("largura"),
        altura: seletor.data("altura"),
        tamanho: seletor.data("tamanho"),
        decimal: seletor.data("decimais"),
        minimo: seletor.data("minimo"),
        maximo: seletor.data("maximo"),
        habilita: seletor.data("habilita"),
        visivel: (seletor.data("visivel") != false ? true : false),
        edita: seletor.data("edita"),
        tratamento: seletor.data("tratamento"),
        tipofonte: seletor.data("tipofonte"),
        tamfonte: seletor.data("tamfonte")
    };

    var opcoes = $.extend({}, defaults, opcoesHTML);
    opcoes = $.extend({}, opcoes, opcoesJS);

    return opcoes;
}


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(seletor, opcoesJS) {
    var defaults = {
        rotulo: "",
        horizontal: "0px",
        vertical: "0px",
        largura: "100px",
        altura: "100px",
        visivel: seletor.is(":visible"),
        tipofonte: "\"Times New Roman\", \"Arial\", \"Courier New\", \"Sans-Serif\"",
        tamfonte: "13px",
        corfundo: false
    };
    var opcoesHTML = {
        rotulo: seletor.data("rotulo"),
        horizontal: seletor.data("horizontal"),
        vertical: seletor.data("vertical"),
        largura: seletor.data("largura"),
        altura: seletor.data("altura"),
        visivel: (seletor.data("visivel") != false ? true : false),
        tipofonte: seletor.data("tipofonte"),
        tamfonte: seletor.data("tamfonte"),
        corfundo: (seletor.data("corfundo") != "" ? seletor.data("corfundo") : false)
    };

    var opcoes = $.extend({}, defaults, opcoesHTML);
    opcoes = $.extend({}, opcoes, opcoesJS);

    return opcoes;
}


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(seletor, opcoesJS) {
    var defaults = {
        nome: "",
        horizontal: "0px",
        vertical: "0px",
        largura: "100px",
        altura: "100px",
        habilita: true,
        visivel: seletor.is(":visible"),
        edita: false,
        borda: "1px",
        imagem: "imagem_quebrada.png"
    };
    var opcoesHTML = {
        nome: seletor.data("nome"),
        horizontal: seletor.data("horizontal"),
        vertical: seletor.data("vertical"),
        largura: seletor.data("largura"),
        altura: seletor.data("altura"),
        habilita: seletor.data("habilita"),
        visivel: (seletor.data("visivel") != false ? true : false),
        edita: (seletor.data("edita") != false ? true : false),
        borda: seletor.data("borda"),
        imagem: seletor.data("imagem")
    };

    var opcoes = $.extend({}, defaults, opcoesHTML);
    opcoes = $.extend({}, opcoes, opcoesJS);

    return opcoes;
}


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(seletor, opcoesJS) {
    var defaults = {
        rotulo: "",
        horizontal: "0px",
        vertical: "0px",
        largura: "50px",
        altura: "16px",
        tamanho: 0,
        minimo: null,
        maximo: null,
        habilita: !seletor.is(":disabled"),
        visivel: seletor.is(":visible"),
        edita: true,
        tratamento: 0,
        tipofonte: "\"Times New Roman\", \"Arial\", \"Courier New\", \"Sans-Serif\"",
        tamfonte: "13px"
    };
    var opcoesHTML = {
        rotulo: seletor.data("rotulo"),
        horizontal: seletor.data("horizontal"),
        vertical: seletor.data("vertical"),
        largura: seletor.data("largura"),
        altura: seletor.data("altura"),
        tamanho: seletor.data("tamanho"),
        minimo: seletor.data("minimo"),
        maximo: seletor.data("maximo"),
        habilita: seletor.data("habilita"),
        visivel: (seletor.data("visivel") != false ? true : false),
        edita: seletor.data("edita"),
        tratamento: seletor.data("tratamento"),
        tipofonte: seletor.data("tipofonte"),
        tamfonte: seletor.data("tamfonte")
    };

    var opcoes = $.extend({}, defaults, opcoesHTML);
    opcoes = $.extend({}, opcoes, opcoesJS);

    return opcoes;
}


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(seletor, opcoesJS) {
    var defaults = {
        rotulo: "",
        horizontal: "0px",
        vertical: "0px",
        largura: "100%",
        altura: "98%",
        visivel: seletor.is(":visible"),
        borda: 1,
        corfundo: "#D6D6D6",
        valores: "",
        menu: "",
        menuopcoes: {
            atualizar: true,
            incluir: true,
            editar: true,
            apagar: true
        },
        formulario: "",
        condicao: "",
        ordem: [],
        naoOrdena: [],
    };
    var opcoesHTML = {
        rotulo: seletor.data("rotulo"),
        horizontal: seletor.data("horizontal"),
        vertical: seletor.data("vertical"),
        largura: seletor.data("largura"),
        altura: seletor.data("altura"),
        visivel: (seletor.data("visivel") != false ? true : false),
        borda: seletor.data("borda"),
        corfundo: seletor.data("corfundo"),
        valores: seletor.data("valores"),
        menu: seletor.data("menu"),
        menuopcoes: seletor.data("menuopcoes"),
        formulario: seletor.data("formulario"),
        condicao: seletor.data("condicao"),
        ordem: seletor.data("ordem"),
        naoOrdena: seletor.data("naoOrdena")
    };

    var opcoes = $.extend({}, defaults, opcoesHTML);
    opcoes = $.extend({}, opcoes, opcoesJS);

    return opcoes;
}


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(seletor, opcoesJS) {
    var defaults = {
        rotulo: "",
        horizontal: "0px",
        vertical: "0px",
        largura: "100px",
        altura: "16px",
        habilita: !seletor.is(":disabled"),
        visivel: seletor.is(":visible"),
        tratamento: 0,
        tipofonte: "\"Times New Roman\", \"Arial\", \"Courier New\", \"Sans-Serif\"",
        tamfonte: "13px",
        opcoes: "",
        url: "http://localhost:3000/api/menus",
        idmenu: 0
    };
    var opcoesHTML = {
        rotulo: seletor.data("rotulo"),
        horizontal: seletor.data("horizontal"),
        vertical: seletor.data("vertical"),
        largura: seletor.data("largura"),
        altura: seletor.data("altura"),
        habilita: seletor.data("habilita"),
        visivel: (seletor.data("visivel") != false ? true : false),
        tratamento: seletor.data("tratamento"),
        tipofonte: seletor.data("tipofonte"),
        tamfonte: seletor.data("tamfonte"),
        opcoes: seletor.data("opcoes"),
        url: seletor.data("url"),
        idmenu: seletor.data("idmenu")
    };

    var opcoes = $.extend({}, defaults, opcoesHTML);
    opcoes = $.extend({}, opcoes, opcoesJS);

    return opcoes;
}


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(seletor, opcoesJS) {
    var defaults = {
        horizontal: "0px",
        vertical: "0px",
        largura: "100px",
        altura: "100px",
        visivel: seletor.is(":visible"),
        borda: "1px",
        corfundo: "#DFDFDF"
    };
    var opcoesHTML = {
        horizontal: seletor.data("horizontal"),
        vertical: seletor.data("vertical"),
        largura: seletor.data("largura"),
        altura: seletor.data("altura"),
        visivel: (seletor.data("visivel") != false ? true : false),
        borda: seletor.data("borda"),
        corfundo: seletor.data("corfundo")
    };

    var opcoes = $.extend({}, defaults, opcoesHTML);
    opcoes = $.extend({}, opcoes, opcoesJS);

    return opcoes;
}


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const opcoesPastas = __webpack_require__(42)

module.exports = function(parametros) {
    return this.each(function() {

        // Definindo valores padrões
        var opcoes = opcoesPastas($(this), parametros);

        // Cria os rotulos caso não tenham sido especificados no HTML
        if ($(this).find("a[href]").length == 0) {
            $(this).children("div:first").before("<ul>");
            $(this).children("div").each(function(index) {
                var rotulo = ($(this).data("rotulo") != undefined ? $(this).data("rotulo") : "_");
                $("<li>").append("<a href='#_" + $(this).attr("name") + "'>" + rotulo + "</a>").appendTo($(this).parent().children("ul"));
                $(this).attr("id", "_" + $(this).attr("name"));
            });
        }

        // Formata os containers de pastas e acerta a cor de fundo das pastas
        $(this).tabs().css("padding", "0px").children("ul").css("padding", "0px").children("li").css("margin", "-1px -1px -1px 0px").children("a").css("padding", ".2em .5em .2em .5em");
        $(this).children("div").css("position", "relative").css("background-color", opcoes.corfundo).css("padding", "0px").css("overflow", "hidden").height(parseInt(opcoes.altura) - 26);

        // Posiciona e dimensiona o campo na tela
        $(this).tipagem("posiciona", opcoes.horizontal, opcoes.vertical, opcoes.largura, opcoes.altura);

        // Torna o campo invisivel conforme a opcao informada
        if (opcoes.visivel != null) {
            $(this).tipagem("visivel", opcoes.visivel);
        }
    });
}


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(horizontal, vertical, largura, altura) {

    // Se o pai for um Label, se o filho for uma tabela, ou se o filho for um botão ou se o filho for um label,
    // posiciona o elemento pai
    if ($(this).parent().is('label') || $(this).parent().hasClass("container_lista") || $(this).is('button') || $(this).is('label')) {
        $(this).parent().css({
            left: horizontal,
            top: vertical
        });
    } else {
        // Se o pai do pai for um label, posiciona o pai do pai
        if ($(this).parent().parent().is('label')) {
            $(this).parent().parent().css({
                left: horizontal,
                top: vertical
            });
        } else {
            $(this).css({
                left: horizontal,
                top: vertical
            });
        }
    };

    // Se o filho for uma tabela, dimensiona o elemento pai
    if ($(this).parent().hasClass("container_lista")) {
        $(this).parent().css({
            width: largura,
            height: altura
        });
    } else {
        // Não permite dimensionar tabela na primeira montagem do formulário
        if (!$(this).is('table')) {
            $(this).css({
                width: largura,
                height: altura
            });
        }
    }

    function checkNumber(valor) {
        return !isNaN(parseFloat(valor)) && isFinite(valor);
    };
}


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function() {
    return this.each(function() {
        $(this).find("[data-tipo]").each(function(index, input) {
            $(input).tipagem($(input).data("tipo").toLowerCase());
        });
    })
}


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const opcoesSenha = __webpack_require__(0)

module.exports = function(parametros) {
    return this.each(function() {

        // Torna campo do tipo senha para não apresentar a digitação
        $(this).attr('type', 'password');

        // Definindo valores padrões
        var opcoes = opcoesSenha($(this), parametros);

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

        //Adiciona a classe de arredondamento dos cantos do campos conforme padão JQuery-UI
        $(this).addClass("ui-corner-all")

        // Habilita ou desabilita o campo conforme a opcao informada
        if (opcoes.habilita != null) {
            $(this).tipagem("habilita", opcoes.habilita);
        }

        $(this).keypress(function(key) {
            // Limita o tamanho do campo com o tamanho informado nas opções
            if (opcoes.tamanho > 0 && $(this).val().length >= opcoes.tamanho) {
                key.preventDefault();
            }
        });

        $(this).bind('paste', function() {
            var el = $(this);
            setTimeout(function() {
                alert("Este tipo de campo não aceita copiar/colar valores!");
                el.val("");
            }, 100);
        });
    });
}


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(selectionStart, selectionEnd) {
    if (this.lengh == 0)
        return this;
    input = this[0];

    if (input.createTextRange) {
        var range = input.createTextRange();
        range.collapse(true);
        range.moveEnd('character', selectionEnd);
        range.moveStart('character', selectionStart);
        range.select();
    } else if (input.setSelectionRange) {
        input.focus();
        input.setSelectionRange(selectionStart, selectionEnd);
    }

    return this;
}


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(opcao) {
    var retorno = undefined;

    // Se o pai for um Label indica a forma de tratamento no pai
    var obj = ($(this).parent().is('label') ? $(this).parent().find("span") : $(this));
    switch (opcao) {
        case 0:
            // Campo de tratamento normal e sem obrigatoriedade de conteúdo
            obj.css("font-weight", "normal");
            obj.css("font-style", "normal");
            break;
        case 1:
            // Obriga a informação no conteúdo
            obj.css("font-weight", "bold");
            obj.css("font-style", "normal");
            break;
        case 2:
            // Campo com valores informados pelo sistema
            obj.css("font-weight", "normal");
            obj.css("font-style", "oblique");
            break;
        case undefined:
            // Retorna o valor de tratamento atual
            if (obj.css("font-weight") == 400 && obj.css("font-style") == "normal")
                retorno = 0;
            if (obj.css("font-weight") == "bold" && obj.css("font-style") == "normal")
                retorno = 1;
            if (obj.css("font-weight") == 400 && (obj.css("font-style") == "oblique" || obj.css("font-style") == "italic"))
                retorno = 2;
            break;
    }
    return retorno;
}


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(opcao) {
    var retorno = undefined;

    // Se o pai for um Label obtem o objeto pai, senão obtem o objeto filho
    var obj = ($(this).parent().is('label') ? $(this).parent() : ($(this).parent().parent().is('label') ? $(this).parent().parent() : $(this)));
    if (opcao == undefined) {
        // Retorna visibilidade atual
        if (obj.css("visibility") == "hidden" || obj.css("display") == "none") {
            retorno = false;
        } else {
            retorno = true;
        };
    } else {
        if (opcao == true) {
            obj.show();
        } else {
            obj.hide();
        }
    }
    return retorno;
}


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// carga dos CSS do plugin
__webpack_require__(2)

(function($) {

    $.fn.tipagem = __webpack_require__(1);

})(jQuery);


/***/ })
/******/ ]);
//# sourceMappingURL=amigo-validacao.js.map
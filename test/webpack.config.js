const webpack = require('webpack')
const path = require('path')

const caminho = (pontoFinal = "") => path.resolve(__dirname, pontoFinal)

module.exports = {
    entry: caminho("validacao_2.js"),
    output: {
        path: caminho("."),
        filename: "validacao_2-bdl.js"
    },
    devtool: "source-map",
    module: {
        loaders: [{
            test: /\.css$/,
            include: [caminho("../css"), caminho("../themes/amigo"), caminho("../node_modules")],
            loader: "style-loader!css-loader"
        }, {
            test: /\.png$/,
            include: [caminho("../img"), caminho("../themes/amigo/images")],
            loader: "url-loader?limit=200000"
        }, {
            test: /\.jpg$/,
            include: [caminho("../img")],
            loader: "url-loader?limit=100000"
        }, {
            test: /\.gif$/,
            include: [caminho("../img"), caminho("../node_modules")],
            loader: "url-loader?limit=100000"
        }]
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".js", ".css"],
        alias: {
            "jquery-ui": caminho("../node_modules/jquery-ui-dist/jquery-ui.js")
        }
    }
}

const webpack = require( "webpack" );

module.exports = {
	context: __dirname + "/js",
	entry: [
		// Hot reloading
		"react-hot-loader/patch",
		"webpack-dev-server/client?http://localhost:8080",
		"webpack/hot/only-dev-server",

		"./src/app-loader.js"
	],
	output: {
		path: __dirname + "/js/dist/",
		publicPath: "/js/dist/",
		filename: "[name].js",
		jsonpFunction: "r16WebpackJsonp",
		chunkFilename: "[hash].chunk.js"
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: [
					{
						loader: "babel-loader"
					}
				]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
	],
	devServer: {
		hot: true,
	}
}

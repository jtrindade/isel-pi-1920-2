const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

	plugins: [
		new HtmlWebpackPlugin({
			title: 'ITEMS'
		})
	],

	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.(png|gif|jpe?g)$/i,
				use: [ 'file-loader' ]
			}
		]
	}
}

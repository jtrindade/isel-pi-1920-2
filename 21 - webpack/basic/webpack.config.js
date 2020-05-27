const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	
	output: {
		filename: 'bundle.js'
	},
	
	plugins: [
		new HtmlWebpackPlugin({
			title: 'ISEL - LEIC - PI'
		})
	],
	
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [ 'style-loader', 'css-loader' ]
			}
		]
	}
}

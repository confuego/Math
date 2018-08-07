const merge = require('webpack-merge');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Math.js'
		})
	],
	mode: "development",
	devServer: {
		contentBase: './dist'
	}
});

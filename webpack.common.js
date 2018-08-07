const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.ts'
	},
	plugins: [
		new CleanWebpackPlugin(['dist'])
	],
	module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
		path: path.join(__dirname, "dist"),
		filename: "math.js",
		libraryTarget: "umd"
  }
};

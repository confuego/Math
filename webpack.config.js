const path = require('path');

module.exports = {
	entry: './src/index.ts',
	mode: "development",
	devServer: {
		contentBase: './'
	},
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

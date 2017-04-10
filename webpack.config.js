// JavaScript Document
const webpack = require('webpack');
const path = require('path');

const config = {
  context: __dirname + '/src',
  entry: './js/index.js',
  module: {
	loaders: [
    {
	    test: /\.js?$/,
		  exclude: /(node_modules)/,
		  loader: 'babel-loader',
		  query: {
		      presets: ['react', 'es2015'],
		  }
    },
     //下面是添加css
     {
       test: /\.css?$/,
       //加载ant design时使用
       loader: 'style-loader!css-loader'
       //加载CSS模块化时使用
       //loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]'
     },
   ]
  },
  output: {
    path: __dirname + '/src/js/',
    filename: 'bundle.js'
  }
};

module.exports = config;

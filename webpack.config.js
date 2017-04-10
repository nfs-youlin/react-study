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
       loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]'
     },
   ]
  },
  output: {
    path: __dirname + '/src/js/',
    filename: 'bundle.js'
  }
};

module.exports = config;
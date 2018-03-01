var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry : {
    'index' : './static-webpack/js/index.js'
  },
  output : {
    path: __dirname + '/static/js/',
    filename: "[name].js"
  },
  module: {
    loaders: [
        {
            test: /\.(js|jsx)$/,//一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
            loader: 'babel'//loader的名称（必须）
        }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
      ReactDOM: "react-dom",
      PropTypes: "prop-types"
    })
  ]
}
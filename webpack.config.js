const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [{
            loader: 'babel-loader',
        }, 
        // {
        //     loader: 'eslint-loader', // 指定启用eslint-loader
        //     options: {
        //         formatter: require('eslint-friendly-formatter'),
        //         emitWarning: false
        //     }
        // }
      ]
      },
      {
        test: /\.(css|less)$/,
        exclude: /node_modules/,
        include: /src/,
        use: [
          {loader: "style-loader"},
          {
              loader: 'css-loader',
              options: {
                  minimize: process.env.NODE_ENV === 'production',
                  importLoaders: 2,
                  localIdentName: '[name]-[local]-[hash:base64:5]',
                  modules:true
              }
          },
          //  {
          //     loader: 'postcss-loader',
          //     options: {           // 如果没有options这个选项将会报错 No PostCSS Config found
          //         plugins: (loader) => [
          //             require('autoprefixer')(), //CSS浏览器兼容
          //         ]
          //     }
          // },
          {
              loader: 'less-loader',
              options: {
                  javascriptEnabled: true,
              }
          }],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      template: 'src/index.html'
    })
  ],
  // plugins: [new HtmlWebpackPlugin()],
  mode: 'development'
};

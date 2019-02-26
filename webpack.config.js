//entry point and final otput file
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => {
  const isProduction = env === 'production';
  if (isProduction) {
    return {
      entry: ['babel-polyfill', './src/index.js'],
      output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
      },
      module: {
        rules: [
          {
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
          },
          {
            test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  plugins: () => [require('autoprefixer')]
                }
              }
            ]
          },
          {
            test: /\.(png|jp(e*)g|svg)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8000, // Convert images < 8kb to base64 strings
                  name: 'images/[hash]-[name].[ext]'
                }
              }
            ]
          }
        ]
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFilename: '[id].css'
        })
      ],
      devtool: 'source-map',
      devServer: {
        contentBase: path.join(__dirname, 'build')
      }
    };
  } else {
    return {
      entry: ['babel-polyfill', './src/index.js'],
      output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
      },
      module: {
        rules: [
          {
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
          },
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'

              // ,
              // {
              //   loader: 'postcss-loader',
              //   options: {
              //     ident: 'postcss',
              //     plugins: () => [require('autoprefixer')]
              //   }
              // }
            ]
          },
          {
            test: /\.(png|jp(e*)g|svg)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8000, // Convert images < 8kb to base64 strings
                  name: 'images/[hash]-[name].[ext]'
                }
              }
            ]
          }
        ]
      },
      devtool: 'cheap-module-eval-source-map',
      devServer: {
        contentBase: path.join(__dirname, 'build')
      }
    };
  }
};

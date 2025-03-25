const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: './src/script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
    assetModuleFilename: 'assets/[name][ext]' // Explicitly set asset output path
  },
  devServer: {
    static: './dist',
    open: true,
    hot: true,
    historyApiFallback: true, // Important for SPA routing
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
},
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('autoprefixer')
                ]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]' // Match the output.assetModuleFilename
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              sources: {
                list: [
                  // All default supported tags and attribute combinations
                  '...',
                  {
                    tag: 'img',
                    attribute: 'src',
                    type: 'src'
                  }
                ]
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    })
  ]
};

// const path = require("path");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

// module.exports = {
//   mode: "development", // Change to "production" before deployment
//   entry: "./src/index.js",
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "bundle.js",
//     clean: true,
//     // assetModuleFilename: "images/[name][ext]", // For images
//   },
//    devServer: {
//     static: './dist',
//     open: true,
//     hot: true,
//     compress: true,
//   },
//   module: {
//     rules: [
//       {
//         test: /\.scss$/,
//         use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
//       },
//       {
//         test: /\.css$/,
//         use: ["style-loader", "css-loader"],
//       },
     
//       {
//         test: /\.html$/,
//         use: ["html-loader"],
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './src/index.html'
//     }),
//     new MiniCssExtractPlugin({
//       filename: 'styles.css'
//     })
//   ],
// };

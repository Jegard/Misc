// This library allows us to combine paths easily
const path = require('path');

module.exports = {
   entry: [path.resolve(__dirname, 'src/js', 'main.js'), path.resolve(__dirname, 'src/sass', 'styles.scss')],
   output: {
      path: path.resolve(__dirname, 'web/build/js'),
      filename: 'bundle.js'
   },
   resolve: {
      extensions: ['.js', '.jsx']
   },
   module: {
       rules: [
           {
               test: /\.js/,
               use: {
                   loader: 'babel-loader',
                   options: { presets: ['es2015'] }
               },
               exclude: /node_modules/
           },
           {
               test: /\.(sass|scss)$/,
               use: [
                   {
                       loader: 'file-loader',
                       options: {
                           name: '[name].css',
                           outputPath: '../css/'
                       }
                   },
                   {
                       loader: 'extract-loader'
                   },
                   {
                       loader: 'css-loader?-autoprefixer!postcss-loader&-url',
                    //    options: {
                    //        minimize: true
                    //    }
                   },
                   {
                       loader: 'postcss-loader'
                   },
                   {
                       loader: 'sass-loader'
                   }
               ]
           }
       ]
   }
};

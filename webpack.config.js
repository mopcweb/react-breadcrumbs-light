const path = require('path');

module.exports = {
  mode: 'production',
  devtool: 'inline-source-map',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.sass$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    'extensions': ['.js', '.jsx', '.ts', '.tsx', '.sass']
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-router-dom': {
      root: 'ReactRouterDOM',
      commonjs2: 'react-router-dom',
      commonjs: 'react-router-dom',
      amd: 'react-router-dom'
    }
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: 'commonjs2'
  }
}

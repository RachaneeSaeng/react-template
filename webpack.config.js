process.env.NODE_ENV = 'production'
var webpack = require('webpack')

module.exports = {
    entry: getEntry(),
    output: {
        publicPath: 'http://localhost:8080/',
        filename: 'dist/bundle.js'
    },
    devtool: "eval",
    plugins: process.env.NODE_ENV === 'production' ? 
            [
                new webpack.DefinePlugin({
                    'process.env': {
                        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                    },
                }),
                new webpack.optimize.UglifyJsPlugin()
            ] :
            [],
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".js", ".ts", ".tsx"]
    },
    module: {
        preLoaders: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                loader: 'source-map'
            }
        ],
        loaders: [
            {
                test: /\.less$/,
                include: /styles/,
                loaders: [
                    'style',
                    'css',
                    'less'
                ]
            },
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                loaders: [
                    'react-hot',
                    'babel?presets[]=env',                  
                    'ts-loader'
                ]
            },
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loaders: [
                    'babel?presets[]=env', 
                ]
            }
        ]
    }    
};

function getEntry() {
  var entry = [];

  if (process.env.NODE_ENV !== 'production') { //only want hot reloading when in dev.
        entry.push('webpack-dev-server/client?http://localhost:8080');
        entry.push('webpack/hot/only-dev-server');
  }

  entry.push('./app/index.tsx');
  entry.push('./styles/style.less');
  return entry;
};
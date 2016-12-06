//var nodeExternals = require('webpack-node-externals');
process.env.NODE_ENV = 'production';

module.exports = {
    entry: getEntry(),
    output: {
        publicPath: 'http://localhost:8080/',
        filename: 'dist/bundle.js'
    },
    devtool: "source-map",
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
                    'autoprefixer?browsers=last 3 versions',
                    'less'
                ]
            },
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                loaders: [
                    'babel',                  
                    'ts-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".js", ".ts", ".tsx"]
    }
};

function getEntry() {
  var entry = [];

  if (process.env.NODE_ENV !== 'production') { //only want hot reloading when in dev.
        entry.push('webpack-dev-server/client?http://localhost:8080');
        entry.push('webpack/hot/only-dev-server');
  }

  entry.push('./app/index.tsx');
  return entry;
};


/*
externals: [
        nodeExternals(),
        {
            "react": {
                root: 'react',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react'
            },
            "react-dom": {
                root:'react-dom',
                commonjs2: 'react-dom',
                commonjs: 'react-dom',
                amd:'react-dom'
            }
        }
    ]
    */
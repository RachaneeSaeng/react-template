//process.env.NODE_ENV = 'production';

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
                    'less'
                ]
            },
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                loaders: [
                    'react-hot',
                    'babel?presets[]=es2015',                  
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
  entry.push('./styles/style.less');
  return entry;
};


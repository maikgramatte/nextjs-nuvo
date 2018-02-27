// const path = require('path');
// const glob = require('glob');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  cssModules: false,
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: './static/[name].[ext]',
        },
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['babel-loader', 'raw-loader', 'postcss-loader'],
        }),
      },
      {
        test: /\.s(a|c)ss$/,
        use: ExtractTextPlugin.extract({
          use: [
            'babel-loader',
            'raw-loader',
            'postcss-loader',
            {
              loader: 'sass-loader',
            },
          ]
        }),
      }
    );

    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // eslint options (if necessary)
        },
      });
    }

    config.plugins.push(new ExtractTextPlugin({
      filename: (getPath) => {
        return getPath('../static/css/app.css');
      },
    }));


    return config;
  },
};

/**
module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: './static/[name].[ext]',
        },
      },
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader'],
      },
      {
        test: /\.s(a|c)ss$/,
        use: ExtractTextPlugin.extract({
          use: [
            'babel-loader',
            'raw-loader',
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                includePaths: ['styles', 'node_modules']
                  .map((d) => path.join(__dirname, d))
                  .map((g) => glob.sync(g))
                  .reduce((a, c) => a.concat(c), [])
              },
            },
          ]
        }),
      }
    );

    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // eslint options (if necessary)
        },
      });
    }

    config.plugins.push(new ExtractTextPlugin({
      filename: (getPath) => {
        return getPath('./static/[name].css');
      },
    }));
    return config;
  },
};

 */
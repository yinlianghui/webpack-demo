const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

// const config = require('./webpack.config.js');
const config = require('./webpack.dev.js');
const options = {
    contentBase: './dist',
    // hot: false,
    host: 'localhost',
    // open: true
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
    console.log('dev server listening on port 5000');
});
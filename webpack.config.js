const path = require('path');
const glob = require('glob');

const entries = {};
glob.sync(path.resolve(__dirname, "./js/*.js")).map(function(fileName) {
    entries[path.basename(fileName, '.js')] = fileName;
});

module.exports = {
    mode: 'production',
    entry: entries,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
};


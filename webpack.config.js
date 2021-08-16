// const path = require('path');
const JavaScriptObfuscator = require('webpack-obfuscator');

module.exports = {
    entry: './src/fontawesome.js',
    output: {
        filename: 'fa.js',
        // path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new JavaScriptObfuscator({
            rotateStringArray: true,
            domainLock: ['webhaidarrental.blogspot.com', 'haidarrentaljogja.com'],
            domainLockRedirectUrl: 'https://www.haidarrentaljogja.com'
        })
    ]
};
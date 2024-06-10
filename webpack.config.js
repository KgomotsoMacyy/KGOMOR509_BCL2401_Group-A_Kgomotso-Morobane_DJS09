// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');' at line 1 before 'module.exports = {...'
Inside 'module.exports = {...' add 'mode', 'devtool'
"mode": "development",
"devtool": "inline-source-map",
"output": {
   "filename": "[name].pack.js",
   "path": path.resolve(__dirname, 'dist'),
}

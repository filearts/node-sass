var spawn = require('child_process').spawn;

if (process.platform === 'darwin' || process.platform === 'sunOS') {
  spawn('node-gyp', ['rebuild']);
}

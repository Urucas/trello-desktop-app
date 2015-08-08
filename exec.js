'use strict'
module.exports = function() {
  
  var spawn = require("child_process").spawn;
  var platforms = {
    darwin: {
      prebuilt: "/node_modules/electron-prebuilt/dist/Electron.app/Contents/MacOS/Electron",
    },
    linux: {
      prebuilt: "/node_modules/electron-prebuilt/dist/electron",
    },
    win: {
      prebuilt: "\node_modules\electron\electron.exe",
    }
  }
  var platform = null;
  if(process.platform == "darwin") { platform = platforms["darwin"]; }
  else if(process.platform == "linux") { platform = platforms["linux"]; }
  else if(/^win/.test(process.platform)) { platform = platforms["win"]; }
  if(!platform) return console.log("Platform not supported");
  spawn(__dirname+platform.prebuilt, [__dirname, "--verbose"], {stdio:'inherit'});
}

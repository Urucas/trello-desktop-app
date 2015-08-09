var app = require('app');
var BrowserWindow = require('browser-window');
var mainWindow = null;

function quit(err) {
  if(err) console.log(err);
  mainWindow = null;
  app.quit();
}

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

app.on('ready', function() {
  
  var options = {
    width: 1040, 
    height: 700, 
    'min-width':600, 
    'min-height':670,
    'node-integration' : false // this is very important for jQuery to load
  }
  mainWindow = new BrowserWindow(options);
  mainWindow.loadUrl('http://trello.com');
  //mainWindow.openDevTools();

});

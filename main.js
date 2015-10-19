var menubar = require('menubar')
var Server = require('electron-rpc/server')
var app = new Server()

var mb = menubar({
    preloadWindow: true,
    height: 175,
    width: 300,
    resizable: false
})

mb.on('ready', function ready () {
  app.configure(mb.window.webContents)
  
  app.on('quit', function(req) {
    mb.app.quit();
  });

  app.on('alert', function(req){
    mb.tray.displayBalloon({
        title: "Time to Switch!",
        content: "Switch now!"
    })
  })

})

const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;
Menu.setApplicationMenu(false);
let mainWindow;

// Listen for app to be ready
app.on('ready', function(){
    
    // Create new Window
    mainWindow = new BrowserWindow({});
    // Load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, './Screens/mainWindow.html'),
        protocol: 'file:',
        slashes: true
    })); 


});



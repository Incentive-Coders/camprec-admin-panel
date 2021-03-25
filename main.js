const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;

// Listen for app to be ready
app.on('ready', function(){
    
    // Create new Window
    data_connection_checker
    
    // Build the menu from the template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    // Insert Menu
    Menu.setApplicationMenu(mainMenu);
});

// Create menu template
const mainMenuTemplate = [
    {
        label:'Home',
        onclick() {
             // Create new Window
    data_connection_checker
    
    
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    // Insert Menu
    Menu.setApplicationMenu(mainMenu);
        }
    }
];

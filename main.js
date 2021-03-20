const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;

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
    
    // Build the menu from the template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

    // Insert Menu
    Menu.setApplicationMenu(mainMenu);
});

// Create menu template
const mainMenuTemplate = [
    {
        label:'File',
        submenu : [
            {
                label: 'Add Item'
            },
            {
                label: 'Clear Items'
            },
            {
                label: 'Exit',
                accelerator: 'Ctrl+Q',
                click(){
                    app.quit();
                }
            }
        ]
    }
];
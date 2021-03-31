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
    // const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    // // Insert Menu
    // Menu.setApplicationMenu(mainMenu);
});
const notifyBtn = document.getElementById('btnid1')
notifyBtn.addEventListener('click', function (event) {
    const modalPath = path.join('file://', __dirname, './Screens/delete_student.html')
    let win = new BrowserWindow({ width: 400, height: 200 })
    win.on('close', function () { win = null })
    win.loadURL(modalPath)
    win.show()
  })
// Create menu template
// const mainMenuTemplate = [
//     {
//         label:'Home',
//         onclick() {
//              // Create new Window
 
    
    
//     const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
//     // Insert Menu
//     Menu.setApplicationMenu(mainMenu);
//         }
//     }
// ];

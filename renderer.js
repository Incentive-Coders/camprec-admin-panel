const electron = require('electron');
const {ipcRenderer,BrowserWindow} = electron;
const ul = document.querySelector('ul');

let window;
function getData() {
    console.log("hero");
    window = new BrowserWindow({});
    // Load html into window
    window.loadURL(url.format({
        pathname: path.join(__dirname, './Screens/delete_student.html'),
        protocol: 'file:',
        slashes: true
    }));
  };

  document.querySelector('btnEd').addEventListener('click', () => {
    getData()
})
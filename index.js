const notifyBtn = document.getElementById('btnid1')
notifyBtn.addEventListener('click', function (event) {
    const modalPath = path.join('file://', __dirname, './Screens/delete-student.html')
    let win = new BrowserWindow({ width: 400, height: 200 })
    win.on('close', function () { win = null })
    win.loadURL(modalPath)
    win.show()
  })
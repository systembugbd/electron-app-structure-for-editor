const { app, BrowserWindow, Menu } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 1000,
        height: 800,
        minWidth: 1000,
        minHeight: 1200,
        resizable: true,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }

    })

    win.loadFile('index.html')
    win.webContents.openDevTools()
}

app.whenReady().then(createWindow)


app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length == 0) {
        createWindow()
    }
})
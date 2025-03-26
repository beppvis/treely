const { app, BrowserWindow } = require("electron");


const createWindow = () => {
    // to be tested in other pcs
    const Win = new BrowserWindow(
        {
            width: 1484, height: 300,
        }
    )
    Win.loadFile("./src/index.html")
}


app.whenReady().then(() => {
    createWindow()
})

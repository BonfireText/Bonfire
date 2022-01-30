import { app, BrowserWindow, ipcMain } from "electron";

let window: BrowserWindow;

app.on("ready", () => {
    window = new BrowserWindow({
        icon: "./build/icon.ico",
        frame: false,
        minWidth: 1200,
        minHeight: 800,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    window.loadFile("./views/index.html");
});

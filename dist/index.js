"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
let window;
electron_1.app.on("ready", () => {
    window = new electron_1.BrowserWindow({
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

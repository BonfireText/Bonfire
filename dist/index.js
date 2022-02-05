"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var express_1 = __importDefault(require("express"));
var server_1 = __importDefault(require("./server/server"));
(0, server_1.default)();
var server = (0, express_1.default)();
var window;
electron_1.app.on("ready", function () {
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

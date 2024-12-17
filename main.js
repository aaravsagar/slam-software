const { app, BrowserWindow } = require('electron');
const path = require('path'); // To handle file paths

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    icon: path.join(__dirname, 'logo.png'), // Set the app icon
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false, // Disable Node.js integration for security
    },
  });

  // Load the website
  mainWindow.loadURL('https://slam-eight.vercel.app');

  // Optional: Uncomment to open Developer Tools by default
  // mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

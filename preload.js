const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  notificationApi: {
    sendNotification(message) {
      console.log(message);
      ipcRenderer.send("notify", message);
    },
  },
  batteryApi: {},
  filesApi: {},
  //and so on api i can generate
});

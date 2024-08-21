chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "displayText",
    title: "Display Selected Text",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "displayText") {
    chrome.storage.sync.set({ selectedText: info.selectionText });
    chrome.action.openPopup();
  }
});

chrome.runtime.onSuspend.addListener(() => {
  chrome.storage.sync.remove("selectedText", () => {
    console.log("Chrome storage cleared on browser close or extension unload");
  });
});
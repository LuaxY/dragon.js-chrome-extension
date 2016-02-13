chrome.contextMenus.create({
    "title": "Dragon.js",
    "id": "dragon.js",
    "contexts": ["all"]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, "Dragon.js");
    });
});

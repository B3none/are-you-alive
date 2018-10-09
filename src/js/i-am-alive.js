setInterval(() => {
    chrome.tabs.query({}, (tabs) => {
        tabs.forEach((tab) => {
            if (tab.url.includes('youtube') && tab.url.includes('watch')) {
                chrome.tabs.executeScript(tab.id, {
                    file: "js/tell-youtube-i-am-not-dead.js"
                });
            }
        });
    });
}, 1000);
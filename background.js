color = '#20157c';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
});

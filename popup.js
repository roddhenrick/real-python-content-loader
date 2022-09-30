let view = document.getElementById("view");

chrome.storage.sync.get("color", ({ color }) => {
    view.style.backgroundColor = color;
});

view.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: showContent,
    });
});

const showContent = () => {
    if(window.location.hostname === 'realpython.com'){
        chrome.storage.sync.get("color", ({ color }) => {
            showScroller = "overflow: visible;"
            hideBlocker = "display: none;"
            opacity = "opacity: 0;"
            document.querySelector("body").style = showScroller;
            document.querySelector("#rprw").style = hideBlocker;
            document.querySelector("body > div.modal-backdrop.fade.show").style = opacity;
        });
    }
}
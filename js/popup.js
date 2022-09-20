var getSelectedTab = (tab) => {
    document.getElementById('startSearchBtn').addEventListener('click', () => {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { method: "startSearchBtnClicked" }, function(response) {});
        });
    });
}
chrome.tabs.getSelected(null, getSelectedTab);
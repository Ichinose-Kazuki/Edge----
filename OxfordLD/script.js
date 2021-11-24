//メニューを登録するコード
chrome.runtime.onInstalled.addListener(function(){
    chrome.contextMenus.create({
        id: "OxfordLearnersDictionary",
        title: "OxfordLDで検索",
        contexts: ["all"],
        type: "normal",
    })
})


//メニューがクリックされた時のコード
chrome.contextMenus.onClicked.addListener(function(event) {
    if(event.menuItemId === "OxfordLearnersDictionary"){
        const url = "https://www.oxfordlearnersdictionaries.com/definition/english/" + event.selectionText
        chrome.tabs.create({url})
    }
})
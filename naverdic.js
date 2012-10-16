function OnClick(info, tab) {
    var url = "http://endic.naver.com/search.nhn?query=";
    url += encodeURIComponent(info.selectionText);
    url += "&x=0&y=0&kind=keyword";
    
    chrome.tabs.create({"index": tab.index+1, "url": url});
}

title = chrome.i18n.getMessage("NaverDicMenuTitle");
context = "selection";
chrome.contextMenus.create({"title": title, "contexts": [context],
		"onclick": OnClick});

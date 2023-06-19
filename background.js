function setupContextMenu(){
	chrome.contextMenus.create({
		id: "test",
		title: "test",
		contexts: ["selection"]
	})
}

chrome.runtime.onInstalled.addListener(()=>{
	setupContextMenu()
})

chrome.runtime.onStartup.addListener(()=>{
	setupContextMenu()
})

chrome.contextMenus.onClicked.addListener((data) => {
	chrome.runtime.sendMessage({
		name: "test",
		data: { value: data.selectionText }
	})
})


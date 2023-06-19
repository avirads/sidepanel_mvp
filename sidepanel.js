chrome.runtime.onMessage.addListener(({ name, data}) => {
console.log(name)
	if(name === 'test'){
		document.body.innerText = data.value
	}
})

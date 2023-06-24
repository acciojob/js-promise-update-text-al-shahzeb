//your JS code here. If required.

function prms() {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("Hello, world!")
		},1000)
	})
}

prms().then((data)=>{
	document.getElementById("output").innerText = data;
})







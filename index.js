let myDocs = []
// const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById('ul-el')
const clearBtn = document.getElementById('clear-btn')

// on startup
let docsFromLocalStorage = JSON.parse(localStorage.getItem('myDocs'))
let boolDocsFromLocalStorage = Boolean(docsFromLocalStorage)
if (boolDocsFromLocalStorage){
	myDocs = docsFromLocalStorage
	renderDocs(myDocs)
}

// event listeners
inputBtn.addEventListener("click", function(){
	
	// get url of current page
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
		let tabUrl = tabs[0].url
		myDocs.push(tabUrl)
	})

	// set myDocs in localStorage
	localStorage.setItem("myDocs", JSON.stringify(myDocs))

	// call renderDocs
	renderDocs(myDocs)
})

clearBtn.addEventListener('dblclick', function(){
	localStorage.clear()
	myDocs = []
	renderDocs(myDocs)
})

// functions
function renderDocs(docs){
	let listItems = ""
	for (let i=0; i<docs.length; i++){
		listItems += 
		`
		<li>
			<a target='_blank' href=${docs[i]}> 
				${docs[i]}
			</a>
		</li>
		`
	}
	ulEl.innerHTML = listItems
}

// let myDocs = `["something"]`
// myDocs = JSON.parse(myDocs)
// myDocs.push('something new')
// myDocs = JSON.stringify(myDocs)
// console.log(typeof myDocs)
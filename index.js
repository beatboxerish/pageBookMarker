let myDocs = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById('ul-el')

let docsFromLocalStorage = JSON.parse(localStorage.getItem('myDocs'))
let boolDocsFromLocalStorage = Boolean(docsFromLocalStorage)
if (boolDocsFromLocalStorage){
	myDocs = docsFromLocalStorage
	renderDocs()
}

inputBtn.addEventListener("click", function(){
	
	// push input into myDocs
	myDocs.push(inputEl.value)
	
	// clear input textbox
	inputEl.value = ""

	// set myDocs in localStorage
	localStorage.setItem("myDocs", JSON.stringify(myDocs))

	// call renderDocs
	renderDocs()
})

function renderDocs(){
	let listItems = ""
	for (let i=0; i<myDocs.length; i++){
		listItems += 
		`
		<li>
			<a target='_blank' href=${myDocs[i]}> 
				${myDocs[i]}
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
let myDocs = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById('ul-el')

inputBtn.addEventListener("click", function(){
	myDocs.push(inputEl.value)
	inputEl.value = ""
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
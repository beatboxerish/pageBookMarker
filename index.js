let myDocs = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById('ul-el')

inputBtn.addEventListener("click", function(){
	myDocs.push(inputEl.value)
	console.log('Saved !')
})

for (let i=0; i<myDocs.length; i++){
	console.log(myDocs[i])
	ulEl.textContent(myDocs[i])
}
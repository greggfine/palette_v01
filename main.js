const instInputForm = document.querySelector("#inst-input-form");
let instInput = document.querySelector("#instrument");

const instrumentList = document.querySelector(".collection");

instInputForm.addEventListener("submit",(e) => {
	e.preventDefault();
	let instListItem = document.createElement("li");
	instListItem.textContent = e.target[0].value;
	instListItem.className = "collection-item";
	instrumentList.appendChild(instListItem);
	instInput.value = "";
})
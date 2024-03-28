var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = document.querySelectorAll("li");
var delbtns = document.querySelectorAll(".delete");
var doneIsAdded = 0;

// *******************************************
// Function declarations
// *******************************************

// Return length of string in the input field.
function inputLength() {
	return input.value.length;
}

// Create a new list item with delete button and add listeners to it
function createListElement() {
	var li = document.createElement("li");
	var btn = document.createElement("button");
	btn.classList.add("delete");
	btn.appendChild(document.createTextNode("x"));
	li.appendChild(btn);
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	addListenerToListItem(li);
	addListenerToDelBtn(btn);
	input.value = "";
}

 // Add new list item to shopping list
function addListAfterClick() {
	if (inputLength() > 0){
		createListElement();
	}
}
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.key === "Enter"){
		createListElement();
	}
}

// Add "done" class to list item
function toggleDone() {
	if(doneIsAdded === 0){
		event.target.classList.add("done");
		doneIsAdded++;
	} 
	else {
		event.target.classList.toggle("done");
	}
}

// Add event listener to a list item
function addListenerToListItem(item) {
	item.addEventListener("click", toggleDone);
}
// Add event listener to a delete button
function addListenerToDelBtn(btn) {
	btn.addEventListener("click", deleteParent);
}

function deleteParent(event) {
	event.target.removeEventListener("click", deleteParent);
	event.target.parentNode.remove();
}


// *******************************************
// Event Listeners
// *******************************************

// Add event listeners to existing list elements
for (var i = 0; i < items.length; i++) {
	addListenerToListItem(items[i]);
}

// Add event listeners to existing delete buttons
for (var i = 0; i < delbtns.length; i++) {
	addListenerToDelBtn(delbtns[i]);
}

// Add event listener to input button
button.addEventListener("click", addListAfterClick);

// Add event listener to input field
input.addEventListener("keydown", addListAfterKeypress);






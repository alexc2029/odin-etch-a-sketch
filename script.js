let squareContainer = document.querySelector(".grid-squares");
function createGrid(size) {
	let widthAndHeight =
		(Number(
			window
				.getComputedStyle(squareContainer)
				.getPropertyValue("width")
				.replace("px", "")
		) -
			2) /
		size;
	console.log(widthAndHeight);
	while (squareContainer.firstChild)
		squareContainer.removeChild(squareContainer.lastChild);

	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			let squareDiv = document.createElement("div");
			squareDiv.classList.add("square-div");
			squareDiv.style.height = `${widthAndHeight}px`;
			squareDiv.style.width = `${widthAndHeight}px`;
			squareContainer.appendChild(squareDiv);
		}
	}
}
createGrid(16);
squareContainer.addEventListener("mouseover", trail);
let opacity = 0;
function trail(e) {
	if (e.target.className != "grid-squares") {
		//e.target.style.backgroundColor = "black";
		///random RGB values
		e.target.style.backgroundColor = `rgb(${Math.floor(
			Math.random() * 255
		)},${Math.floor(Math.random() * 255)},${Math.floor(
			Math.random() * 255
		)})`;
		e.target.style.opacity = `${opacity}%`;
		if (opacity == 100) opacity = 0;
		else opacity += 10;
	}
}

let newGridBtn = document.getElementById("new-grid");
newGridBtn.addEventListener("click", newGridHandler);

function newGridHandler() {
	let size = prompt("Enter the number of squares per side (maximum 100)");
	if (size <= 100) {
		size = Number(size);
		createGrid(size);
	} else alert("Number must not exceed 100");
}

let squareContainer = document.querySelector(".grid-squares");
for (let i = 0; i < 16; i++) {
	for (let j = 0; j < 16; j++) {
		let squareDiv = document.createElement("div");
		squareDiv.classList.add("square-div");
		squareContainer.appendChild(squareDiv);
	}
}

squareContainer.addEventListener("mouseover", trail);

function trail(e) {
	if (e.target.className != "grid-squares")
		e.target.style.backgroundColor = "black";
}

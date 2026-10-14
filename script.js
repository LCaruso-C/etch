const container = document.getElementById("container");

// Default grid size
createGrid(16);

function createGrid(size) {
  container.innerHTML = ""; // Clear previous grid

  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;


//change the color of the square to a random color when hovered over
    square.addEventListener("mouseover", () => {
      // RANDOM RGB MODE
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);

      square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    });

    container.appendChild(square);
  }
}

// Resize button
document.getElementById("resizeBtn").addEventListener("click", () => {
  let newSize = prompt("Enter new grid size (max 100):");

  if (newSize === null) return;

  newSize = parseInt(newSize);

  if (newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert("Enter a number between 1 and 100.");
  }
});


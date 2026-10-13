const container = document.getElementById('grid-container');   

function createGrid(size) {
    container.innerHTML = ''; // Clear existing grid

    const gridSize = 960 / size; // Calculate the size of each cell based on the grid size
    for (let i = 0; i < size * size; i++) {
        const grid = document.createElement('div');
        grid.classList.add('grid-square');
        grid.style.width = `${gridSize}px`;
        grid.style.height = `${gridSize}px`;

        grid.addEventListener('mouseover', () => {
            grid.style.backgroundColor = 'black';
        });
        container.appendChild(grid);
    }
}

document.getElementById('resizebtn').addEventListener('click', () => {
    const newSize = prompt('Enter new grid size (1-100):');
    if (newSize >= 1 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert('Enter a valid number between 1 and 100.');
    }
}); 


createGrid(); // Create initial grid with 16x16 squares
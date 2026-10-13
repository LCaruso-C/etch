const grid-container = document.getElementById('grid-container');   

function createGrid(size) {
    grid-container.innerHTML = ''; // Clear existing grid

    const gridSize = 960 / size; // Calculate the size of each cell based on the grid size
    for (let i = 0; i < size * size; i++) {
        const grid = document.createElement('div');
        grid.classList.add('grid-square');
        grid.style.width = `${gridSize}px`;
        grid.style.height = `${gridSize}px`;

        grid.addEventListener('mouseover', () => {
            grid.style.backgroundColor = 'black';
        });
        grid-container.appendChild(grid);
    }
}

createGrid(16); // Create initial grid with 16x16 squares
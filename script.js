const container = document.getElementById('grid-container');   
const resizeBtn = document.getElementById('resizebtn'); 

//creating grid squares and adding event listener to change color on hover
function createGrid(size) {
    container.innerHTML = ''; // Clear existing grid

    const gridSize = 960 / size; // Calculate the size of each cell based on the grid size
   
    for (let i = 0; i < size * size; i++) {
        const grid = document.createElement('div');
        grid.classList.add('grid-square');

        grid.style.width = `${gridSize}px`;
        grid.style.height = `${gridSize}px`;

        grid.addEventListener('mouseover', () => {
           const r = Math.floor(Math.random() * 256);
           const g = Math.floor(Math.random() * 256);
           const b = Math.floor(Math.random() * 256);
           grid.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });

        grid.addEventListener('dblclick', () => {   
            grid.style.backgroundColor = 'black';
        });

        container.appendChild(grid);
    }
}

document.getElementById('resizebtn').addEventListener('click', () => {
    let newSize = prompt('Enter new grid size (1-100):');
   
    if (newSize >= 1 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert('Enter a valid number between 1 and 100.');
    }
}); 


createGrid(16); // Create initial grid with 16x16 squares
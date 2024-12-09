
const colores = ['#1abc9c', '#3498db', '#9b59b6', '#f1c40f', '#e67e22', '#e74c3c', '#2ecc71'];

function cambiarColor() {
    const elemento = document.getElementById('nombre');
    let nuevoColor;
    do {
        nuevoColor = colores[Math.floor(Math.random() * colores.length)];
    } while (nuevoColor === '#e74c3c'); // Evitar el color rojo
    elemento.style.color = nuevoColor;
}

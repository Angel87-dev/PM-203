console.log("===== CATALOGO DE PRODUCTOS =====")

const catalogoProductos = [
    { id: 1, nombre: "Cafe Americano", precio: 35 },
    { id: 2, nombre: "Cafe Latte", precio: 45 },
    { id: 3, nombre: "Capuchino", precio: 50 },
    { id: 4, nombre: "Te Chai", precio: 40 },
    { id: 5, nombre: "Croissant", precio: 25 },
    { id: 6, nombre: "Muffin", precio: 30 },
    { id: 7, nombre: "Cheesecake", precio: 55 },
    { id: 8, nombre: "Sandwich", precio: 65 }
];

console.log("id | nombre             | precio");
console.log("--------------------------------");
catalogoProductos.forEach(p => {
    console.log(`${p.id}  | ${p.nombre.padEnd(18)} | $${p.precio}`);
});
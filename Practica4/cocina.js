console.log("===== CATALOGO DE PRODUCTOS =====");

const productos = [
    { id: 1, nombre: "Cafe Americano", precio: 35, categoria: "bebida", promocion: false },
    { id: 2, nombre: "Cafe Latte", precio: 45, categoria: "bebida", promocion: true },
    { id: 3, nombre: "Capuchino", precio: 50, categoria: "bebida", promocion: false },
    { id: 4, nombre: "Te Chai", precio: 40, categoria: "bebida", promocion: true },
    { id: 5, nombre: "Croissant", precio: 25, categoria: "postre", promocion: false },
    { id: 6, nombre: "Muffin", precio: 30, categoria: "postre", promocion: true },
    { id: 7, nombre: "Cheesecake", precio: 55, categoria: "postre", promocion: false },
    { id: 8, nombre: "Sandwich", precio: 65, categoria: "comida", promocion: true }
];

console.log("id | nombre             | precio | categoría | promocion");
console.log("---------------------------------------------------------");

productos.forEach(producto => {
    console.log(`${producto.id} | ${producto.nombre.padEnd(18)} | $${producto.precio} | ${producto.categoria} | ${producto.promocion}`);
});

const buscarProducto = (id) => {
    return productos.find(producto => producto.id === id);
};

const productosBaratos = () => {
    return productos.filter(producto => producto.precio <= 60);
};

const productosCaros = () => {
    return productos.filter(producto => producto.precio > 60);
};

const bebidas = () => {
    return productos.filter(producto => producto.categoria === "bebida");
};

const postres = () => {
    return productos.filter(producto => producto.categoria === "postre");
};

const promociones = () => {
    return productos.filter(producto => producto.promocion === true);
};

console.log("\n===== BUSCAR PRODUCTO ID 3 =====");
console.log(buscarProducto(3));

console.log("\n===== PRODUCTOS BARATOS =====");
console.log(productosBaratos());

console.log("\n===== PRODUCTOS CAROS =====");
console.log(productosCaros());

console.log("\n===== BEBIDAS =====");
console.log(bebidas());

console.log("\n===== POSTRES =====");
console.log(postres());

console.log("\n===== PROMOCIONES =====");
console.log(promociones());

console.log("\n===== SIMULACION DE COCINA =====");

const pedidoCancelado = false;

const prepararCafe = () => {

    return new Promise((resolve, reject) => {

        console.log("Preparando café...");

        setTimeout(() => {

            if(pedidoCancelado){

                reject("Pedido cancelado | Area: Caja");

                return;

            }

            const numeroAleatorio = Math.random();

            if(numeroAleatorio < 0.2){

                reject("Falta ingrediente | Area: Cocina");

                return;

            }

            else if(numeroAleatorio < 0.4){

                reject("Error en cocina | Area: Cocina");

                return;

            }

            else{
                resolve("Cafe preparado | Area: Cocina");
            }

        }, 3000);

    });

};

prepararCafe()
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.log(error);
    });

console.log("Tomando otro pedido...");
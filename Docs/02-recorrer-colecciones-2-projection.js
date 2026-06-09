console.clear();

const ecommerceDb = db.getSiblingDB('ecommerce');

// Productos de marca Samsung y Sony
// const cursor = ecommerceDb.productos.find();

const findFilter = { marca: { $in: ['Samsung', 'Sony'] } };
const projection = { categoria: 1, marca: 1, nombre: 1, precio: 1, _id: 0 };

const cursor = ecommerceDb.productos.find(findFilter, projection);

cursor.forEach(function (producto) {
    // print(producto);
    print(`${producto.categoria} | ${producto.marca} | ${producto.nombre} - $${producto.precio}`);
    print('-----------------------------------');
});

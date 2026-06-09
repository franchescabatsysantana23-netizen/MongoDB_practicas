console.clear();

const ecommerceDb = db.getSiblingDB('ecommerce');

// Productos de marca Samsung y Sony
// const cursor = ecommerceDb.productos.find();

const findFilter = { marca: { $in: ['Samsung', 'Sony'] } };
const cursor = ecommerceDb.productos.find(findFilter);

cursor.forEach(function (producto) {
    // print(producto);
    print(`${producto.categoria} | ${producto.marca} | ${producto.nombre} - $${producto.precio}`);
    print('-----------------------------------');
});

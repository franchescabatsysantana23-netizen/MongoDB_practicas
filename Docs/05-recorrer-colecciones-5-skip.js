console.clear();

const ecommerceDb = db.getSiblingDB('ecommerce');

// Productos de marca Samsung y Sony
// const cursor = ecommerceDb.productos.find();

const findFilter = { marca: { $in: ['Samsung', 'Sony'] } };
const projection = { categoria: 1, marca: 1, nombre: 1, precio: 1, _id: 0 };
const sort = { categoria: 1, marca: 1, precio: 1 };
const skip = 2;

const cursor = ecommerceDb.productos.find(findFilter, projection).sort(sort).skip(skip);

let ultimaCategoria = null;

cursor.forEach(function (producto) {
    if (ultimaCategoria !== producto.categoria) {
        print(`~~~~~~~~~~~~~~~~~~~~~~~~~ ${producto.categoria} ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
        ultimaCategoria = producto.categoria;
    }
    // print(producto);
    print(`${producto.marca} | ${producto.nombre} - $${producto.precio}`);
    print('-----------------------------------');
});

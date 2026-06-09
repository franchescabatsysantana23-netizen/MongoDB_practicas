// ==========================================================
//  Seleccionar base de datos
// ==========================================================
use("ecommerce");

print("👉 Base de datos seleccionada: " + db.getName());

// ==========================================================
//  1. Obtener usuarios existentes
// ==========================================================
// Buscamos tres usuarios ya existentes en la colección "users"
// para usarlos como referencia en los pedidos.
const userMarcos = db.users.findOne({ firstName: "Marcos", lastName: "Fernández" });
const userLucia = db.users.findOne({ firstName: "Lucía", lastName: "Gómez" });
const userAlan = db.users.findOne({ firstName: "Alan", lastName: "Medina" });

print("Usuarios encontrados:");
print("  Marcos:", userMarcos ? userMarcos._id : "No encontrado");
print("  Lucía:", userLucia ? userLucia._id : "No encontrado");
print("  Alan:", userAlan ? userAlan._id : "No encontrado");

// ==========================================================
//  2. Obtener sucursales existentes
// ==========================================================
// Hacemos lo mismo con dos sucursales ya registradas en "branches".
// Cada pedido hará referencia a una de estas sucursales.
const branchRecoleta = db.branches.findOne({ name: "Recoleta" });
const branchCordoba = db.branches.findOne({ name: "Córdoba Centro" });

print("Sucursales encontradas:");
print("  Recoleta:", branchRecoleta ? branchRecoleta._id : "No encontrada");
print("  Córdoba Centro:", branchCordoba ? branchCordoba._id : "No encontrada");

// ==========================================================
//  3. Obtener productos existentes
// ==========================================================
// Buscamos algunos productos reales de la colección "productos".
// Estos serán los ítems incluidos en los pedidos.
const productoSmartTV = db.productos.findOne({ nombre: 'Smart TV 55" 4K' });
const productoAuriculares = db.productos.findOne({ nombre: "Auriculares Inalámbricos Bluetooth" });
const productoLaptop = db.productos.findOne({ nombre: "Laptop 16GB RAM, 512GB SSD" });
const productoAspiradora = db.productos.findOne({ nombre: "Aspiradora Robot" });

print("Productos encontrados:");
print("  Smart TV:", productoSmartTV ? productoSmartTV._id : "No encontrado");
print("  Auriculares:", productoAuriculares ? productoAuriculares._id : "No encontrado");
print("  Laptop:", productoLaptop ? productoLaptop._id : "No encontrado");
print("  Aspiradora:", productoAspiradora ? productoAspiradora._id : "No encontrado");

// ==========================================================
//  4. Insertar pedidos
// ==========================================================
// Cada documento en "pedidos" representa una orden de compra.
// Referencia a un usuario, una sucursal y uno o varios productos.
const resultado = db.pedidos.insertMany([
    {
        user_id: userMarcos._id,
        branch_id: branchRecoleta._id,
        fecha: ISODate("2025-10-20"),
        productos: [
            { producto_id: productoSmartTV._id, cantidad: 1 },
            { producto_id: productoAuriculares._id, cantidad: 2 }
        ]
    },
    {
        user_id: userLucia._id,
        branch_id: branchCordoba._id,
        fecha: ISODate("2025-10-21"),
        productos: [
            { producto_id: productoLaptop._id, cantidad: 1 }
        ]
    },
    {
        user_id: userAlan._id,
        branch_id: branchRecoleta._id,
        fecha: ISODate("2025-10-22"),
        productos: [
            { producto_id: productoAspiradora._id, cantidad: 1 },
            { producto_id: productoAuriculares._id, cantidad: 3 }
        ]
    }
]);

// ==========================================================
//  5. Confirmación
// ==========================================================
print("🎉 Pedidos insertados correctamente.");
print("IDs generados:");
printjson(resultado.insertedIds);

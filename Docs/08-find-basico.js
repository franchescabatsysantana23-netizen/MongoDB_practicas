use('ecommerce');

print('Mostrando los primeros 3 documentos de la colección "pedidos":');

const pedidosBasicos = db.pedidos.find().limit(3).toArray();

print(pedidosBasicos);
print('Consulta básica finalizada.');

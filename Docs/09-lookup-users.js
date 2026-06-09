use('ecommerce');

const pipeline = [
    {
        $lookup: {
            from: 'users',
            localField: 'user_id',
            foreignField: '_id',
            as: 'detalleUsuario',
        }
    }
];

const resultado = db.pedidos.aggregate(pipeline).toArray();
print(resultado);
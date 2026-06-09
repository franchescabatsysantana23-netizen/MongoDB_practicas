use('ecommerce');

const pipeline = [
    {
        $lookup: {
            from: 'users',
            localField: 'user_id',
            foreignField: '_id',
            as: 'detalleUsuario',
        }
    },
    {
        $lookup: {
            from: 'branches',
            localField: 'branch_id',
            foreignField: '_id',
            as: 'detalleSucursal',
        }
    }
];

const resultado = db.pedidos.aggregate(pipeline).toArray();
print(resultado);
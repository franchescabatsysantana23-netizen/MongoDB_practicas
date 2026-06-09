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
    },
    {
        $project: {
            _id: 1,
            fecha: 1,
            productos: 1,

            user: { $arrayElemAt: ['$detalleUsuario', 0] },

            branch: {
                _id: { $arrayElemAt: ['$detalleSucursal._id', 0] },
                name: { $arrayElemAt: ['$detalleSucursal.name', 0] },
                province: { $arrayElemAt: ['$detalleSucursal.province', 0] },
            },
        }
    }
];

const resultado = db.pedidos.aggregate(pipeline).toArray();
print(resultado);
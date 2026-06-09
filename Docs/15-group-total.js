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
        $unwind: '$productos'
    },
    {
        $lookup: {
            from: 'productos',
            localField: 'productos.producto_id',
            foreignField: '_id',
            as: 'detalleProducto',
        }
    },
    {
        $project: {
            _id: 1,
            fecha: 1,

            user: { $arrayElemAt: ['$detalleUsuario', 0] },

            branch: {
                _id: { $arrayElemAt: ['$detalleSucursal._id', 0] },
                name: { $arrayElemAt: ['$detalleSucursal.name', 0] },
                province: { $arrayElemAt: ['$detalleSucursal.province', 0] },
            },

            item: {
                cantidad: '$productos.cantidad',
                producto: { $arrayElemAt: ['$detalleProducto', 0] },
            }
        }
    },
    {
        $addFields: {
            'item.subtotal': {
                $multiply: [
                    '$item.cantidad',
                    '$item.producto.precio'
                ]
            },
            'user.fullName': {
                $concat: [
                    '$user.firstName',
                    ' ',
                    '$user.lastName',
                ]
            }
        }
    },
    {
        $group: {
            _id: '$_id',
            total: { $sum: '$item.subtotal' },
            totalUnidades: { $sum: '$item.cantidad' },
            fecha: { $first: '$fecha' },
            user: { $first: '$user' },
            branch: { $first: '$branch' },

            items: {
                $push: {
                    productoNombre: '$item.producto.nombre',
                    cantidad: '$item.cantidad',
                    precioUnitario: '$item.producto.precio',
                    subtotal: '$item.subtotal',
                }
            }
        }
    },
    {
        $project: {
            _id: 1,
            fecha: 1,
            user: 1,
            branch: 1,
            total: { $round: ['$total', 2] },
            totalUnidades: 1
        }
    }
];

const resultado = db.pedidos.aggregate(pipeline).toArray();
print(resultado);
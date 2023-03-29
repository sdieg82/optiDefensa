const mongoose=require('mongoose');

const ProductosSchema=mongoose.Schema({
    nombreProducto:{
        type:String,
        required:true,
        trim:true
    },
    marcaProducto:{
        type:String,
        required:true,
        trim:true
    },
    existencia:{
        type:Number,
        required:true
    },
    precioCompra:{
        type:Number,
        required:true,
        trim:true

    },
    precioVenta:{
        type:Number,
        required:true,
        trim:true

    },
    modelo:{
        type:String,
        required:true,
        trim:true

    },
    marca:{
        type:String,
        required:true,
        trim:true

    },
    cantidadCompra:{
        type:Number
    },
    precioCompra:{
        type:Number

    },
    marca:{
        type:String,
        required:true,
        trim:true

    },
    creado:{
        type:Date,
        default:Date.now()
    },
    proveedor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Proveedor'
    }


});

ProductosSchema.index({ nombre: 'text' });
module.exports=mongoose.model('Productos',ProductosSchema)
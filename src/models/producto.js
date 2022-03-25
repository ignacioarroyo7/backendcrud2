import mongoose, {Schema} from "mongoose";

const productoSchema = new Schema({
    nombreProducto:{
        type:String,
        required:true,
        maxlength:150,
        unique:true
    },
    precioProducto:{
        type:Number,
        required:true
    },
    categoriaProducto:{
        type:String,
        required:true
    }
})

const Producto = mongoose.model('producto',productoSchema);

export default Producto;
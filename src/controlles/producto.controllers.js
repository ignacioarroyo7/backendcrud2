import Producto from "../models/producto";

const productoCtrl = {};

productoCtrl.crearProducto = async (req,res)=>{
    //console.log(req.body);
    try {
        //validar por las dudas, usando helpers o if
        //crear un nuevo objeto para guardar en la bd
        const productoNuevo = new Producto({
            nombreProducto:req.body.nombreProducto,
            precioProducto:req.body.precioProducto,
            categoriaProducto:req.body.categoriaProducto
        });
        //guardar producto en la bd
        await productoNuevo.save();
        //enviar respuesta
        res.status(201).json({
            mensaje: 'Producto agregado correctamente'
        })
        
    } catch (error) {
        console.log(error);
        //enviar codigo de error
        res.status(400).json({
            mensaje:'Error al agregar un producto'
        })
    }
}

//logica para obtener la lista de productos
//creo una propiedad getListaProductos que ejecuta un metodo
productoCtrl.getListaProductos = async (req,res)=>{
    try {
        //crear arreglo con todos los productos
        const listaProductos = await Producto.find();
        res.status(200).json(listaProductos);
    } catch (error) {
        res.status(404).json({
            mensaje:'Hubo un error al obtener el listado de productos'
        })
    }
}
productoCtrl.getProducto = async (req,res)=>{
    try {
        //obtener parametro de la ruta
        console.log(req.params.id);
        //creo el objeto y lo busco en la bd
        const productoBuscado = await Producto.findById(req.params.id);
        res.status(200).json(productoBuscado)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje:'Hubo un error al obtener el listado de productos'
        })
    }
}

productoCtrl.borrarProducto = async (req,res)=>{
    try {
        //buscar un producto por el id y eliminarlo
        await Producto.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje: 'Producto borrado correctamente'
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            mensaje:'Error al eliminar un producto'
        })
    }
}
productoCtrl.editarProducto = async (req,res)=>{
    try {
        //buscar el producto con el id y modificar los valores con los datos que llegan en el body
        await Producto.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json({
            mensaje:'Se modifico el producto correctamente'
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            mensaje:'No se encontro el producto'
        })
    }
}


export default productoCtrl;
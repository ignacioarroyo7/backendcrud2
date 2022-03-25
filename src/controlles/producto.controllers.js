import Producto from "../models/producto";

const productoCtrl = {};

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

productoCtrl.borrarProducto = (req,res)=>{
    res.send('aqui borro productos')
}
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

export default productoCtrl;
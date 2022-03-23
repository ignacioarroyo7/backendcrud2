const productoCtrl = {};

//logica para obtener la lista de productos
//creo una propiedad getListaProductos que ejecuta un metodo
productoCtrl.getListaProductos = (req,res)=>{
    res.send('listar productos');
}

productoCtrl.borrarProducto = (req,res)=>{
    res.send('aqui borro productos')
}
productoCtrl.crearProducto = (req,res)=>{
    res.send('creando producto')
}

export default productoCtrl;
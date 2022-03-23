import { Router } from "express";
import productoCtrl from "../controlles/producto.controllers";

const router = Router();

//crear rutas
router.route('/apicrud/').get(productoCtrl.getListaProductos);
router.route('/apicrud/borrarProducto').delete(productoCtrl.borrarProducto)

export default router;
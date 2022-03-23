import { Router } from "express";
import productoCtrl from "../controlles/producto.controllers";

const router = Router();

//crear rutas
router
  .route("/")
  .get(productoCtrl.getListaProductos)
  .delete(productoCtrl.borrarProducto)
  .post(productoCtrl.crearProducto);

export default router;

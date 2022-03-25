import { Router } from "express";
import productoCtrl from "../controlles/producto.controllers";

const router = Router();

//crear rutas
router
  .route("/")
  .get(productoCtrl.getListaProductos)
  .post(productoCtrl.crearProducto);

router
  .route("/:id")
  .get(productoCtrl.getProducto)
  .delete(productoCtrl.borrarProducto)
  .put(productoCtrl.editarProducto);

export default router;

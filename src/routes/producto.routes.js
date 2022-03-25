import { Router } from "express";
import productoCtrl from "../controlles/producto.controllers";

const router = Router();

//crear rutas
router
  .route("/")
  .get(productoCtrl.getListaProductos)
  .delete(productoCtrl.borrarProducto)
  .post(productoCtrl.crearProducto);

  router.route("/:id").get(productoCtrl.getProducto);

export default router;

//router
import {Router} from "express";
import * as productController from "../controllers/products.controller.js";

const router = Router()


router.get('/', productController.getAllProducts)

router.get('/:id', productController.getProductById)

router.post('/create', productController.createProduct)

router.delete('/:id', productController.deleteProduct)

export default router

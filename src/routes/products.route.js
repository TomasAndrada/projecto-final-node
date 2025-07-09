//router
import {Router} from "express";
import * as productController from "../controllers/products.controller.js";

const router = Router()


router.get('/', productController.getAllProducts)


export default router

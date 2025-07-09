// controller

import * as productService from "../services/products.service.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getProducts();
        res.status(200).json({message: "Lista de productos", payload: products});
    } catch (error) {
        res.status(500).json({message: error, error: error.message});
    }
}
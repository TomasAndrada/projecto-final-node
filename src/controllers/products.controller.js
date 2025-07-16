// controller

import * as productService from "../services/products.service.js";

export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        await productService.deleteProduct(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({message: error, error: error.message});
    }
};


export const createProduct = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(422).json('Body requerido.');
        }
        const {name, price, description} = req.body;
        if (!name || !price || !description) {
            return res.status(422).send('Datos faltantes.');
        }
        const newProduct = await productService.createProduct({name, price, description});
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({message: error, error: error.message});
    }
};


export const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await productService.getProductById(id);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).send('Producto no encontrado');
        }
    } catch (error) {
        res.status(500).json({message: error, error: error.message});
    }
};


export const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getProducts();
        res.status(200).json({message: "Lista de productos", payload: products});
    } catch (error) {
        res.status(500).json({message: error, error: error.message});
    }
}
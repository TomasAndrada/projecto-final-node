// services
import * as productModel from '../models/products.model.js';

export async function deleteProduct(id) {
    await productModel.deleteProduct(id);
}


export async function createProduct(productData) {
    const newProduct = {
        name: productData.name,
        price: productData.price,
        description: productData.description,
    };
    newProduct.id = await productModel.createProduct(newProduct);
    return newProduct;
}


export async function getProductById(id) {
    return await productModel.getProductById(id);
}


export const getProducts = async () => {
    return await productModel.getProducts();
}
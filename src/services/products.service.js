// services
import * as productModel from '../models/products.model.js';

export async function getProductById(id) {
    return await productModel.getProductById(id);
}


export const getProducts = async () => {
    return await productModel.getProducts();
}
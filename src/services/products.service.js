// services
import * as productModel from '../models/products.model.js';



export const getProducts = async () => {
    return await productModel.getProducts();
}

// export const getProductById = async (id) => {
//     return "products.find(product => product.id === id)";
// };
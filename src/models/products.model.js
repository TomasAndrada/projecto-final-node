// model
// import ... from '../config/db-connection.js'
import {db} from "../config/db.js"

import {
    collection, getDocs, getDoc, addDoc, deleteDoc, doc
} from 'firebase/firestore';

export async function deleteProduct(id) {
    try {
        await deleteDoc(doc(productsCollection, id));
    } catch(error) {
        throw new Error(`Error deleting product ${error}`);
    }
}


export async function createProduct(newProduct) {
    try {
        const docRef = await addDoc(productsCollection, newProduct)
        return docRef.id
    } catch (error) {
        throw new Error(`Error creating product for ${productsCollection}`);
    }
}


const productsCollection = collection(db, "products");


export async function getProductById(id) {
    try {
        const productDoc = await getDoc(doc(productsCollection, id))
        if (productDoc) {
            return productDoc.data();
        } else {
            return null;
        }
    } catch (err) {
        throw new Error(`Error getting product for ${productsCollection}`);
    }
}

export async function getProducts() {
    try {
        const querySnapshot = await getDocs(productsCollection);
        const products = [];
        querySnapshot.forEach((doc) => {
            products.push({id: doc.id, ...doc.data()});
        })
        return products;
    } catch (err) {
        throw new Error(`Error getting products for ${productsCollection}`);
    }
}
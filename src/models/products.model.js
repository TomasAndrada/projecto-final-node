// model
// import ... from '../config/db-connection.js'
import {db} from "../config/db.js"

import {
    collection, getDocs, getDoc, addDoc, deleteDoc, doc
} from 'firebase/firestore';

const productsCollection = collection(db, "products");

export async function getProducts() {
    try {
        const querySnapshot = await getDocs(productsCollection);
        const products = [];
        querySnapshot.forEach((doc) => {
            products.push({id: doc.id, ...doc.data()});
        })
        console.log(products);
        return products;
    } catch (err) {
        throw new Error(`Error getting products for ${productsCollection}`);
    }


}
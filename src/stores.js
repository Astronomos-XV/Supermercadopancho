/*import { writable } from 'svelte/store';

const initialProducts = [
    { id: 1, name: 'Pancho Clásico', price: 5.99, stock: 20, description: 'Pancho tradicional con aderezos' },
    { id: 2, name: 'Pancho Picante', price: 6.99, stock: 15, description: 'Pancho con salsa picante y jalapeños' }
];

export const products = writable(initialProducts);

export function saveProduct(editedProduct) {
    products.update(items => {
        const index = items.findIndex(p => p.id === editedProduct.id);
        return index === -1 ?
            [...items, { ...editedProduct, id: Date.now() }] :
            items.map(p => p.id === editedProduct.id ? editedProduct : p);
    });
}

export function deleteProduct(id) {
    products.update(items => items.filter(p => p.id !== id));
}*/


import { writable } from 'svelte/store';

const STORAGE_KEY = 'superpancho-products';

// Cargando datos desde el local storages
const initialProducts = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [
    // diccionario para ingresar los productos
];

export const products = writable(initialProducts);

// Metodo para guardar en el localstorage
function saveToStorage(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function saveProduct(editedProduct) {
    products.update(items => {
        const index = items.findIndex(p => p.id === editedProduct.id);
        const newItems = index === -1 ?
            [...items, { ...editedProduct, id: Date.now() }] :
            items.map(p => p.id === editedProduct.id ? editedProduct : p);

        saveToStorage(newItems);
        return newItems;
    });
}

export function deleteProduct(id) {
    products.update(items => {
        const newItems = items.filter(p => p.id !== id);
        saveToStorage(newItems);
        return newItems;
    });
}
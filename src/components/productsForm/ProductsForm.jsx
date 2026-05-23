import React from 'react';
import styles from './ProductsForm.module.css';

export function ProductsForm({ dataForm, adminChange, adminSend, adminImageChange }) {


    return (
        <form className={styles.productsForm} onSubmit={adminSend}>
            <h3>Agregar Nuevo Producto</h3>
            <div>
                <label>Nombre del Producto:</label>
                <input
                    type="text"
                    placeholder="Ej: Black Forest"
                    name="name"
                    value={dataForm.name}
                    onChange={adminChange}
                />
            </div>
            <div>
                <label>Precio: $</label>
                <input
                    type="number"
                    placeholder="Ej: 35000"
                    name="price"
                    value={dataForm.price}
                    onChange={adminChange}
                />
            </div>
            <div>
                <label>Stock:</label>
                <input
                    type="number"
                    placeholder="Ej: 6"
                    name="stock"
                    value={dataForm.stock}
                    onChange={adminChange}
                />
            </div>
             <div>
                <label>Imagen:</label>
                <input
                    type="file"
                    placeholder="https://…"
                    onChange={adminImageChange}
                />
            </div>
            <button type="submit">Guardar Producto</button>
        </form>
    );
}
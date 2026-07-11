import React from 'react';
import styles from './ProductsForm.module.css';

export function ProductsForm({ dataForm, adminChange, adminSend, adminImageChange, loading, editionMode, cancelEdition }) {


    return (
        <form className={styles.productsForm} onSubmit={adminSend}>
            <h3> {editionMode
                ? "Editar Producto"
                : "Agregar Nuevo Producto"}</h3>
            <div>
                <label>Id: </label>
                <input
                    type="number"
                    placeholder="Ej: 8888"
                    name="id"
                    value={dataForm.id}
                    onChange={adminChange}
                />
            </div>
            <div>
                <label>Nombre del Producto: </label>
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
                <label>Stock: </label>
                <input
                    type="number"
                    placeholder="Ej: 6"
                    name="stock"
                    value={dataForm.stock}
                    onChange={adminChange}
                />
            </div>
            <div>
                <label>Descripción: </label>
                <input
                    type="text"
                    placeholder="Ej: Chocolate intenso..."
                    name="description"
                    value={dataForm.description}
                    onChange={adminChange}
                />
            </div>
            <div>
                <label>Categoría: </label>
                <input
                    type="text"
                    placeholder="Ej: Tradicionales"
                    name="category"
                    value={dataForm.category}
                    onChange={adminChange}
                />
            </div>
            <div>
                <label>Destacado: </label>
                <input
                    type= "checkbox"
                    name="featured"
                    value={dataForm.featured}
                    onChange={adminChange}
                />
            </div>
            <div>
                <label>Imagen: </label>
                <input
                    type="file"
                    placeholder="https://…"
                    onChange={adminImageChange}
                />
            </div>
            <button type="submit">{loading
                ? "Procesando..."
                : editionMode
                    ? "Actualizar Producto"
                    : "Guardar Producto"}</button>
              {
                    editionMode &&
                    <button
                        type="button"
                        onClick={cancelEdition}
                    >
                        Cancelar
                    </button>
                }
        </form>
    );
}

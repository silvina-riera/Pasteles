import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { ProductsForm } from
    '../productsForm/ProductsForm';
import { collection, getDocs, deleteDoc, doc, addDoc, updateDoc } from "firebase/firestore";
import styles from './Management.module.css';

const Management = () => {
    const [products, setProducts] = useState([]);
    const formInitialState = {
        id: '',
        name: '',
        price: '',
        stock: '',
        image: '',
        description: '',
        featured: false,
        category: ''
    };

    const [dataForm, setDataForm] = useState(formInitialState);

    const [imageFile, setImageFile] = useState(null);

    const [loading, setLoading] = useState(false);

    const [productToEdit, setProductToEdit] = useState(null);

    const editionMode = productToEdit !== null;

    const adminChange = (event) => {
        const { name, value, type, checked } = event.target;

        const numberFields = ['id', 'price', 'stock'];

        setDataForm({
            ...dataForm,
            [name]:
                type === 'checkbox'
                    ? checked
                    : numberFields.includes(name)
                        ? Number(value)
                        : value
        });
    };

    const adminImageChange = (event) => {
        setImageFile(event.target.files[0]);
    };

    const fetchProducts = async () => {
        const productsRef = collection(db, "products");
        const resp = await getDocs(productsRef);

        setProducts(
            resp.docs.map((doc) => ({
                ...doc.data(),
                idFirestore: doc.id
            }))
        );
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const adminSend = async (event) => {
        event.preventDefault();
        if (dataForm.name.trim() === "" || dataForm.price <= 0) {
            alert("Por favor, complete todos los campos y asegúrese de que el precio sea mayor a cero.");
            return;
        }
        
        if (!imageFile && !productToEdit) {
            alert("Por favor, selecciona una imagen para el producto.");
            return;
        }

        setLoading(true);

        try {

            let imageUrl = dataForm.image;

            if (imageFile) {
                const apiKey = '22aaac7be12a0512e7d42e166c4f5c15';
                const formData = new FormData();
                formData.append('image', imageFile);


                const answerImgbb = await
                    fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
                        method: 'POST',
                        body: formData,
                    });

                const dataImgbb = await answerImgbb.json();

                if (!dataImgbb.success) {
                    throw new Error("Error al subir la imagen.");
                }
                imageUrl = dataImgbb.data.url

            }
            const productComplete = {
                ...dataForm,
                image: imageUrl
            };



            if (editionMode) {

                const docRef = doc(
                    db,
                    "products",
                    productToEdit.idFirestore
                );

                await updateDoc(docRef, productComplete);
                alert("Producto actualizado correctamente");

            } else {

                const productsCollection = collection(db, "products");

                await addDoc(productsCollection, productComplete);
                alert("Producto guardado correctamente");
            }
            await fetchProducts();

            setDataForm(formInitialState);
            setImageFile(null);
            setProductToEdit(null);


        } catch (error) {

            console.error(error);
            alert("Ocurrió un error.");

        } finally {

            setLoading(false);

        }
    };



    const handleDelete = async (idFirestore) => {
        const confirmation = window.confirm("¿Está seguro de que desea eliminar este producto ? ");
        if (!confirmation) return;
        await deleteDoc(doc(db, "products", idFirestore));
        setProducts(products.filter(prod => prod.idFirestore !== idFirestore));
        alert("Producto eliminado.");

    };

    const adminEdit = (product) => {
        const { idFirestore, ...productData } = product;
        setProductToEdit(product);
        setDataForm(productData);
    };

    const cancelEdition = () => {
        setProductToEdit(null);
        setDataForm(formInitialState);
    };


    return (
        <div>
            <h1>Gestión de Productos</h1>
            <hr />
            <ProductsForm
                dataForm={dataForm}
                adminChange={adminChange}
                adminImageChange={adminImageChange}
                adminSend={adminSend}
                loading={loading}
                editionMode={editionMode} 
                cancelEdition={cancelEdition}/>
            <hr />
            <h3>Lista de Productos</h3>
            <div className={styles.tableContainer}>
            <table className={styles.productsTable}>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((prod) => (
                        <tr key={prod.idFirestore}>
                            <td>{prod.name}</td>
                            <td>${prod.price}</td>
                            <td>
                                <button
                                    onClick={() => adminEdit(prod)}>
                                    Editar
                                </button>
                                <button onClick={() => handleDelete(prod.idFirestore)} style={{ marginLeft: '10px' }}>
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
};
export default Management;
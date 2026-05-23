import React, { useState } from 'react';
import { ProductsForm } from './ProductsForm';

export function ContainerForm() {
    const [dataForm, setDataForm] = useState({
        name: '',
        price: '',
        stock: '',
    });

    const [imageFile, setImageFile] = useState(null);

    const adminChange = (event) => {
        const { name, value } = event.target;
        setDataForm({
            ...dataForm,
            [name]: value
        });
    };

    const adminImageChange = (event) => {
        setImageFile(event.target.files[0]);
    };


    const adminSend = async (event) => {
        event.preventDefault();
        if (!imageFile) {
            alert("Por favor, selecciona una imagen para el producto.");
            return;
        }
        const apiKey = '22aaac7be12a0512e7d42e166c4f5c15';
        const formData = new FormData();
        formData.append('image', imageFile);
        try {
            console.log("Subiendo imagen a Imgbb...");
            const answerImgbb = await
                fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
                    method: 'POST',
                    body: formData,
                });
            const dataImgbb = await answerImgbb.json();
            if (dataImgbb.success) {
                console.log("Imagen subida con éxito. URL:", dataImgbb.data.url);

                const completeProduct = {
                    ...dataForm,
                    urlImage: dataImgbb.data.url
                };
                console.log('Enviando los siguientes datos COMPLETOS a la API:', completeProduct);
            } else {
                throw new Error('La subida de la imagen a Imgbb falló.');
            }
        } catch (error) {
            console.error("Error en el proceso de envío:", error);
            alert("Hubo un error al subir la imagen. Por favor, intentá denuevo.");
        }
    };

    return (
        <ProductsForm
            dataForm={dataForm}
            adminChange={adminChange}
            adminSend={adminSend}
            adminImageChange={adminImageChange}
        />
    );
}


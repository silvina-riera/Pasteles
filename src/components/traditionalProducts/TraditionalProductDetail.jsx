import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDocs, query, collection, where } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { TraditionalProductCard } from "../traditionalProductCard/TraditionalProductCard";
import styles from './TraditionalProductDetail.module.css';

const TraditionalProductDetail = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        if (!id) {
            setLoading(false);
            return;
        }

        const queryId = query(
            collection(db, 'products'),
            where('id', '==', Number(id))
        );

        getDocs(queryId)
            .then((resp) => {
                if (resp.empty) {
                    setProduct(false);
                    return;
                }

                setProduct({
                    firestoreId: resp.docs[0].id,
                    ...resp.docs[0].data()
                });
            })
            .catch((error) => {
                console.error('Error al cargar el producto:', error);
                setProduct(false);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <h2>Cargando detalle del producto...</h2>;
    }

    if (!product) {
        return <h2>Producto no encontrado.</h2>;
    }

    return (
        <div className={styles.traditionalProductDetail}>
            <TraditionalProductCard
                {...product}
                showDescription={true}
                showDetailLink={false}
            />
        </div>
    );
};

export default TraditionalProductDetail;
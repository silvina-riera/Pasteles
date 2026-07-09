import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import styles from './TraditionalProducts.module.css';
import { Link } from 'react-router-dom';
import { TraditionalProductCard } from "../traditionalProductCard/TraditionalProductCard";

const TraditionalProducts = ({ Message, featured = false }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const productsDB = collection(db, "products")
        getDocs(productsDB).then((resp) => {
            setProducts(
                resp.docs.map((doc) => {
                    return { ...doc.data() }
                })
            );
        })
    }, []);

    const productsToShow = featured
        ? products.filter(prod => prod.featured)
        : products;

    return (
        <div>
            <h1>{Message}</h1>
            <div className={styles.traditionalProducts}>
                {productsToShow.map(prod => (
                    <TraditionalProductCard key={prod.id} {...prod} />
                ))}
            </div>
        </div>
    );
};
export default TraditionalProducts;

/*import React, { useState, useEffect } from 'react';
import { ProductCard } from "../productCard/ProductCard";
import styles from './Products.module.css';

function Products({ Message, featured = false }) {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/data/products.json')
            .then((answer) => {
                if (!answer.ok) {
                    throw new Error('No se pudo cargar la información de los productos');
                }
                return answer.json();
            })
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const productsToShow = featured
        ? products.filter(prod => prod.featured)
        : products;

    if (loading) {
        return <p>Cargando productos, por favor espere...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>{Message}</h1>
            <div className={styles.products}>
                {productsToShow.map(prod => (
                    <ProductCard key={prod.id} {...prod} />
                ))}
            </div>
        </div>
    );
}

export default Products;*/
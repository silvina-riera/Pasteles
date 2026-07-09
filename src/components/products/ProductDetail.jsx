/*import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductDetail.module.css';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    useEffect(() => {
        fetch('/data/products.json')
            .then(response => response.json())
            .then(data => {
                const productFound = data.find(p => p.id === parseInt(id));
                setProduct(productFound);
            })
            .catch(error => console.error("Error al cargar el producto:", error));
    }, [id]);
    if (!product) {
        return <h2>Cargando detalle del producto...</h2>;
    }
    if (!product.id) {
        return <h2>Producto no encontrado.</h2>;
    }
    return (
        <div className={styles.productDetail}>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
        </div>
    );
};
export default ProductDetail;*/
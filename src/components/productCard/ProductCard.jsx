import { useState } from 'react';
import styles from './ProductCard.module.css';
import { Link } from 'react-router-dom';

export function ProductCard({ id, name, price, stock, image }) {
    const [units, setUnits] = useState(0);
    const increase = () => {
        if (units < stock) {
            setUnits(units + 1);
        }
    };
    const decrease = () => {
        if (units > 1) {
            setUnits(units - 1);
        }
    };
    const addToCart = () => {
        alert(`Agregaste ${units} unidades de ${name} al carrito.`);
    }
    return (
        <div className={styles.productCard}>
            <Link to={`/producto/${id}`}>
            <h3>{name}</h3>
            <img src={image} alt={name} width="150" />
            <p>Precio: ${price}</p>
            <p>Stock disponible: {stock}</p>
            </Link>
            <div className={styles.addToCart}>
                <button onClick={decrease}>-</button>
                <p style={{ margin: '0 10px' }}>{units}</p>
                <button onClick={increase}>+</button>
            </div>
            <button onClick={addToCart}>Agregar al Carrito</button>
        </div>
    );
}



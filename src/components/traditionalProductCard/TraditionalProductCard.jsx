import { useState } from 'react';
import styles from './TraditionalProductCard.module.css';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';


export function TraditionalProductCard({ id, name, price, stock, image, description, showDescription = false, showDetailLink = true }) {
    const product = { id, name, price, stock, image };
    const { addToCart, getActualQuantity } = useCart();
    const [units, setUnits] = useState(0);
    const actualQuantity = getActualQuantity(product.id);

    const increase = () => {
        if (units + actualQuantity < stock) {
            setUnits(units + 1);
        }
    };
    const decrease = () => {
        if (units >= 1) {
            setUnits(units - 1);
        }
    };


    const handleAddToCart = () => {
        if (units === 0) {
            alert("Seleccione al menos una unidad.");
            return;
        }

        addToCart(product, units);
        alert(`Agregaste ${units} unidades de ${name} al carrito.`);
    };

    return (
        <div className={styles.traditionalProductCard}>
            <h3>{name}</h3>
            <img src={image} alt={name} width="150" />
            <p>Precio: ${price}</p>
            <p>Stock disponible: {stock}</p>
            {showDescription && description && (
                <p>{description}</p>
            )}
            {showDetailLink && (
                <Link to={`/producto-tradicional/${id}`}>
                    Ver detalle
                </Link>
            )}
            <div className={styles.addToCart}>
                <button onClick={decrease}>-</button>
                <p style={{ margin: '0 10px' }}>{units}</p>
                <button onClick={increase}>+</button>
            </div>
            {actualQuantity > 0 && (
            <p style={{ fontWeight: 'bold' }}>{actualQuantity} unidades en el Carrito</p>
            )}
            <button onClick={handleAddToCart} disabled={units === 0}>Agregar {units} al Carrito</button>
        </div>
    );
}

export default TraditionalProductCard;



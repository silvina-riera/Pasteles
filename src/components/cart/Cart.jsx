import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import styles from './Cart.module.css';
import { collection, getDocs, query, where, getFirestore } from "firebase/firestore";

const Cart = () => {
    const { cart, clearCart, getCartTotal, removeItem } = useCart();

    const db = getFirestore();

const [enteredCode, setEnteredCode] = useState("");
const [discountPercentage, setDiscountPercentage] = useState(0);

    if (cart.length === 0) {
        return (
            <div>
                <h1>El carrito está vacío</h1>
                <p>Agrega productos para continuar la compra.</p>
                <Link to="/productos-tradicionales">
                    Ver Productos
                </Link>

            </div>
        );
    }

    const applyCoupon = async () => {

        const queryCoupon = query(
            collection(db, "coupons"),
            where("code", "==", enteredCode.toUpperCase())
        );

        const answer = await getDocs(queryCoupon);

        if (answer.empty) {
            alert("Cupón inválido");
            return;
        }

        const coupon = answer.docs[0].data();

        setDiscountPercentage(coupon.discount);

        alert(`Cupón aplicado. Obtuviste un ${coupon.discount}% de descuento.`);
    };

    const subtotal = getCartTotal();
    const discount = subtotal * discountPercentage / 100;
    const total = subtotal - discount;

    return (
        <div className={styles.cart} >
            <h1>Carrito de Compras</h1>
            {cart.map(item => (
                <div key={item.id}>
                    <h4>{item.name}</h4>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio unitario: ${item.price}</p>
                    <p>Subtotal: ${item.price * item.quantity}</p>
                    <button onClick={() => removeItem(item.id)}>Eliminar producto</button>
                </div>
            ))}
            <div>
                <input
                    type="text"
                    placeholder="Código de descuento"
                    value={enteredCode}
                    onChange={(e) => setEnteredCode(e.target.value)}
                />

                <button onClick={applyCoupon}>
                    Aplicar cupón
                </button>
            </div>
            <hr />
            <h3>Subtotal: ${subtotal}</h3>

            {discountPercentage > 0 && (
                <>
                    <p>Descuento: {discountPercentage}% (-${discount.toFixed(2)})</p>
                    <h3>Total a pagar: ${total.toFixed(2)}</h3>
                </>
            )}

            {discountPercentage === 0 && (
                <h3>Total a pagar: ${subtotal}</h3>
            )}
            
            <button onClick={clearCart}>Vaciar Carrito</button>
            <Link to="/" onClick={() => {alert("Gracias por comprar"); clearCart()}}>
                Finalizar Compra
            </Link>

        </div>

    );
};
export default Cart;
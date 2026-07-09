import styles from './Header.module.css';
import { Link } from 'react-router-dom'; 
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';


function Header() {
    const { getCartQuantity } = useCart();
    const { user, logout } = useAuth();
    const totalItems = getCartQuantity();

    return (
        <header className={styles.header}>
            <nav>
                <ul>
                    <li><Link to="/">INICIO</Link></li>
                    {/*<li><Link to="/productos">PRODUCTOS</Link></li>
                    <li><Link to="/destacados">DESTACADOS</Link></li>
                    <li><Link to="/alta">ALTA DE PRODUCTOS</Link></li>*/}
                    <li><Link to="/productos-tradicionales">PRODUCTOS TRADICIONALES</Link></li>      
                    <li><Link to="/productos-tradicionales-destacados">TRADICIONALES DESTACADOS</Link></li>
                    <li><Link to="/carrito">CARRITO 🛒 {totalItems > 0 &&
                        <span>{totalItems}</span>}</Link></li>
                    {user ? (
                        <>
                            {user.role === 'admin' && (
                                <><li><Link to="/gestion">GESTION DE PRODUCTOS</Link></li>
                                <li><Link to="/admin/cupones">GESTION DE CUPONES</Link></li></>)}
                            <span  style={{ color: 'white'}}>¡Hola, {user.email}!</span>
                            <button onClick={logout}>Cerrar Sesión</button>
                        </>
                    ) : (
                        <li><Link to="/login">LOGIN</Link></li>
                    )}
                </ul>
            </nav>
        </header>
    );
}
export default Header;
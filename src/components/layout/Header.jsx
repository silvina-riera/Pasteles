import styles from './Header.module.css';
import { Link } from 'react-router-dom'; 

function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <ul>
                    <li><Link to="/">INICIO</Link></li>
                    <li><Link to="/productos">PRODUCTOS</Link></li>
                    <li><Link to="/destacados">DESTACADOS</Link></li>
                    <li><Link to="/alta">ALTA DE PRODUCTOS</Link></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;
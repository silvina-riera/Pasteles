import styles from './Footer.module.css';
import Users from '../users/Users';

function Footer() {
    return (
        <footer className={styles.footer}>
            <Users/>
            <p>&copy; 2026 - Mi Aplicación React</p>
        </footer>
    );
}
export default Footer; 
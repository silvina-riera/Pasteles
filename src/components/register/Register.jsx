import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import styles from './Register.module.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const auth = getAuth();

    const adminSubmit = async (e) => {
        e.preventDefault();
        setError(null); 
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                const wantsLogin = window.confirm(
                    'Este correo electrónico ya está registrado. ¿Desea intentar iniciar sesión ? '
                );
                if (wantsLogin) {
                    navigate('/login');
                } else {
                    navigate('/');
                }
            } else {
                setError('Ocurrió un error al registrar el usuario. Verifique los datos e intente nuevamente.');
                console.error("Error en el registro:", error.message);
            }
        }
    };

    return (
        <div>
            <form onSubmit={adminSubmit} className={styles.register}>
                <h2>Crear una nueva cuenta</h2>
                <div>
                    <label>Correo Electrónico: </label>
                    <input
                        type="email"
                        value={email}

                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Contraseña: </label>
                    <input
                        type="password"
                        value={password}

                        onChange={(e) => setPassword(e.target.value)}
                        required

                        placeholder="Mínimo 6 caracteres"

                    />
                </div>
                {error && <p>{error}</p>}
                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
};
export default Register;

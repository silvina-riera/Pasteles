import React, { useState, useEffect } from 'react';
import styles from './Users.module.css';

function Users() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/data/users.json')
            .then((answer) => {
                if (!answer.ok) {
                    throw new Error('No se pudo cargar la información de los usuarios');
                }
                return answer.json();
            })
            .then((data) => {
                setUsers(data);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    if (loading) {
        return <p>Cargando usuarios, por favor espere...</p>;
    }
    if (error) {
        return <p>Error: {error}</p>;
    }
    return (
        <div>
            <ul className={styles.users}>
                {users.map((user) => (
                    <li className={styles.usersCard} key={user.id}>
                        <h2>{user.name}</h2>
                        <p>{user.task} {user.emoji}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Users;
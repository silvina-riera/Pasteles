import { useState, useEffect } from "react";
import { db } from "../../firebase/config";
import {
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc
} from "firebase/firestore";
import styles from './CouponsManager.module.css';

const CouponsManager = () => {

    const [code, setCode] = useState("");
    const [discount, setDiscount] = useState("");
    const [coupons, setCoupons] = useState([]);


    const fetchCoupons = async () => {

        try {

            const answer = await getDocs(collection(db, "coupons"));

            const list = answer.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));

            setCoupons(list);

        } catch (error) {

            console.error("Error al obtener los cupones:", error);
            alert("Ocurrió un error al cargar los cupones.");

        }

    };

    useEffect(() => {
        fetchCoupons();
    }, []);


    const createCoupon = async (e) => {

        e.preventDefault();

        if (!code || !discount) {
            alert("Complete todos los campos");
            return;
        }

        const percentage = Number(discount);

        if (percentage < 1 || percentage > 100) {
            alert("El descuento debe estar entre 1 y 100.");
            return;
        }

        try {

            await addDoc(collection(db, "coupons"), {
                code,
                discount: Number(discount),
            });

            setCode("");
            setDiscount("");

            await fetchCoupons();

        } catch (error) {
            console.error(error);
            alert("Error al crear el cupón.");
        }

    };


    const deleteCoupon = async (id) => {

        try {

            await deleteDoc(doc(db, "coupons", id));

            await fetchCoupons();

        } catch (error) {
            console.error(error);
            alert("Error al eliminar el cupón.");
        }

    };

    return (
        <div>
            <h1>Gestión de Cupones</h1>
            <form className={styles.form} onSubmit={createCoupon}>
                <h2>Agregar Nuevo Cupón</h2>

                <input
                    type="text"
                    placeholder="Código"
                    required
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Descuento"
                    min="1"
                    max="100"
                    required
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                />

                <button type="submit">
                    Crear Cupón
                </button>

            </form>

            <hr />

            <h3>Listado de Cupones</h3>
            <div className={styles.tableContainer}>
            <table className={styles.couponsTable}>
                <thead>
                    <tr>
                        <th>Cupón</th>
                        <th>Descuento</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {coupons.map((coupon) => (
                        <tr key={coupon.id}>
                            <td>{coupon.code}</td>
                            <td>{coupon.discount}%</td>
                            <td>
                                <button onClick={() => deleteCoupon(coupon.id)}>
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default CouponsManager;
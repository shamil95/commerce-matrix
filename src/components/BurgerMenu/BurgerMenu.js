import React from 'react';
import styles from './BurgerMenu.module.scss';
import {Link} from "react-router-dom";

const BurgerMenu = () => {
    return (
        <div className={styles.container}>
            <div className={styles.routes}>
                <div className={styles.route}>
                    <Link to="/">Home</Link>
                </div>
                <div className={styles.route}>
                    <Link to="/products">Products</Link>
                </div>
            </div>
        </div>
    );
};

export default BurgerMenu;

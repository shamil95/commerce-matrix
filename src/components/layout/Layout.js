import React, {useEffect} from 'react';
import Home from "../Home/Home";
import styles from './Layout.module.scss';
import Login from "../Login/Login";
import {useSelector} from "react-redux";

const Layout = () => {
    const isAuth = useSelector(state => state.user.isUserAuth);

    return (
        <div className={styles.container}>
            {!isAuth ? <Home/> : <Login/> }
        </div>
    );
};

export default Layout;

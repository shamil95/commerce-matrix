import React, {useEffect, useState} from 'react';
import {Link, Outlet} from "react-router-dom";
import {authUser} from "../../redux/actions/user";
import {useDispatch, useSelector} from "react-redux";
import styles from './Layout.module.scss'
import {LogoutOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Home from "../Home/Home";

const Layout = () => {
    const dispatch = useDispatch();
    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    const [goster, setGoster] = useState(true);
    const {basketProducts} = useSelector(state => state.products);

    const onLogoutClick = () => {
        dispatch(authUser(false));
        localStorage.removeItem("token");
    }
    function getCurrentDimension(){
        return window.innerWidth

    }

    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);

        if (screenSize < 769) {
            setGoster(false)
        }
        return(() => {
            window.removeEventListener('resize', updateDimension);
            setGoster(true)

        })
    }, [screenSize])


    return (
        <>
            <nav>
                <div className={styles.container}>
                    { goster ?
                        <div className={styles.routes}>
                            <div className={styles.route}>
                                <Link to="/">Home</Link>
                            </div>
                            <div className={styles.route}>
                                <Link to="/products">Products</Link>
                            </div>
                        </div> : null
                        // <BurgerMenu/>
                    }
                    <div className={styles.rightItems}>
                        <Link to="/basket">
                            <ShoppingCartOutlined />
                        </Link>
                        <div>{basketProducts.length}</div>
                        <LogoutOutlined onClick={onLogoutClick} className={styles.logout}/>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </>

);
};

export default Layout;


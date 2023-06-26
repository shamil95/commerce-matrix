import React, {useEffect, useState} from 'react';
import {Link, Outlet} from "react-router-dom";
import {authUser} from "../../redux/actions/user";
import {useDispatch, useSelector} from "react-redux";
import styles from './Layout.module.scss'
import {LogoutOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Home from "../Home/Home";
import { useTranslation } from "react-i18next";

const Layout = () => {
    const dispatch = useDispatch();
    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    const [goster, setGoster] = useState(true);
    const [selectValue, setSelectValue] = useState('en');
    const {basketProducts} = useSelector(state => state.products);
    const { t, i18n, ready } = useTranslation();

    useEffect(() => {
        const selectedValue = localStorage.getItem('i18nextLng');

        setSelectValue(selectedValue);
    }, [])

    const onLogoutClick = () => {
        dispatch(authUser(false));
        localStorage.removeItem("token");
    }

    function getCurrentDimension(){
        return window.innerWidth

    }

    const changeLanguage = (e) => {
        const {value} = e.target;

        setSelectValue(value)

        i18n.changeLanguage(value);
    };

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
                        <select onChange={changeLanguage} value={selectValue}>
                            {['en', 'az'].map(lang => <option key={lang} value={lang}>{lang}</option>)}
                        </select>
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


import React, {useEffect, useState} from 'react';
import {Link, Outlet} from "react-router-dom";
import {authUser} from "../../redux/actions/user";
import {useDispatch, useSelector} from "react-redux";
import styles from './Layout.module.scss'
import {LogoutOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Home from "../Home/Home";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const languageOptions = [
    {
        value: 'en',
        label: 'English'
    },
    {
        value: 'az',
        label: 'Azerbaijani'
    },
];

const Layout = () => {
    const dispatch = useDispatch();
    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    const [goster, setGoster] = useState(true);
    const [currentLang, setCurrentLang] = useState('en');
    const {basketProducts} = useSelector(state => state.products);
    const [isDark, setIsDark] = useState(false)

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

    const onLanguageChange = (e) => {
        const {value} = e.target;
        setCurrentLang(value);

        i18n.changeLanguage(value);
    }

    useEffect(() => {
        const userLang = localStorage.getItem('i18nextLng');

        if (userLang) {
            setCurrentLang(userLang)
        }
    }, []);

    const handleChangeInput = (e) => {
        const isChecked = e.target.checked;
        localStorage.setItem('theme', isChecked)
        setIsDark(isChecked);
    }

    useEffect(() => {

        const theme = localStorage.getItem('theme');
        setIsDark(theme);
    }, [])


    useEffect(() => {
        if (isDark) {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
        } else {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
        }
    }, [isDark]);

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
                        <label className={styles.switch}>
                            <input type="checkbox"  onChange={handleChangeInput} checked={isDark}/>
                            <div className={styles.slider}></div>
                        </label>
                        <select onChange={onLanguageChange} value={currentLang}>
                            {
                                languageOptions.map((language) => <option key={language.value} value={language.value}>{language.label}</option>)
                            }
                        </select>
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


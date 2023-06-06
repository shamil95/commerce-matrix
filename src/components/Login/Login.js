import React, {useState} from "react";
import styles from "./Login.module.scss";
import {useDispatch} from "react-redux";
import {loginUser} from "../../redux/actions/user";

const Login = () => {
    const dispatch = useDispatch();

    const [userData, setUserData] = useState({
        username: "kminchelle",
        password: "0lelplR",
    });

    const handleChangeUserName = (e) => {
        const {value} = e.target;
        setUserData({
            ...userData,
            username: value,
        });
    };

    const handleChangePassword = (e) => {
        const {value} = e.target;
        setUserData({
            ...userData,
            password: value,
        });
    };

    const onLoginUser = () => {
        dispatch(loginUser(userData))
    }

    return (
        <div className={styles.container}>
            <input
                type="text"
                className={styles.input}
                placeholder={"username"}
                onChange={handleChangeUserName}
                value={"kminchelle"}
            />
            <input
                type="text"
                className={styles.input}
                placeholder={"password"}
                onChange={handleChangePassword}
                value={"0lelplR"}
            />
            <button className={styles.input} onClick={onLoginUser}>
                Login
            </button>
        </div>
    );
};

export default Login;

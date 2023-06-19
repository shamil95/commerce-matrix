import React, {useState} from 'react';
import {loginUser} from "../../redux/actions/user";
import {useDispatch} from "react-redux";

const Login = () => {
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })

    const onChangeUserName = (e) => {
        const {value} = e.target

        setUserData(prevState => {
            return {
                ...prevState,
                username: value
            }
        })
    }

    const onChangePassword = (e) => {
        const {value} = e.target

        setUserData(prevState => ({...prevState, password: value}))
    }

    const onLoginUser = () => {
        dispatch(loginUser(userData))
    }

    return (
        <div>
            <div>
                <input type="text" onChange={onChangeUserName} value={userData.username} placeholder={'username'}/>
            </div>
            <div>
                <input type="text" onChange={onChangePassword} value={userData.password} placeholder={'password'}/>
            </div>
            <button onClick={onLoginUser}>login</button>
        </div>
    );
};

export default Login;

import React from 'react';
import {Button, Form, Input} from "antd";
import styles from './Login.module.scss'
import {loginUser} from "../../redux/actions/user";
import {useDispatch} from "react-redux";

const Login = () => {
    const dispatch = useDispatch();

    const onLoginUserClick = (values) => {
        dispatch(loginUser(values));
    }

    return (
        <Form className={styles.container} onFinish={onLoginUserClick}>
            <Form.Item name={'username'} label={'User name'}>
                <Input size={'middle'}/>
            </Form.Item>
            <Form.Item name={'password'} label={'Password'}>
                <Input size={'middle'}/>
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit">Login</Button>
            </Form.Item>
        </Form>
    );
};

export default Login;

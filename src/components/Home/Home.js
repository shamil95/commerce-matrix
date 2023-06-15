import React from 'react';
import Slider from "../Slider/Slider";
import Modal from "../Modal/Modal";
import styles from './Home.module.scss'


const Home = () => {
    return (
        <>
            <header>header</header>
            <main className={styles.main}>
                <Slider/>
                <Modal/>
            </main>
            <footer>footer</footer>
        </>

    )
};

export default Home;

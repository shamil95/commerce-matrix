import React, {useState} from 'react';
import { useTranslation } from "react-i18next";
import classnames from "classnames";
import styles from './Home.module.scss'

const Home = () => {
    const { t } = useTranslation();
    const [showIcon, setShowIcon] = useState(false)

    return (
        <div>
            <button onClick={() => setShowIcon(!showIcon)}>clickMe</button>
            <h1 className={classnames(styles.header, { [styles.active]: !showIcon })}>{t("home")}</h1>
            <div>{t('products')}</div>
        </div>
    );
};

export default Home;

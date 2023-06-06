import React from 'react';
import styles from './Card.module.scss';

const Card = props => {
    const {card} = props;

    return (
        <div
            className={styles.card}
        >
            <img
                src={card.image}
                alt=""
                style={{ width: "250px", height: "250px" }}
            />
            <span>{card.price}</span>
            <span>{card.category}</span>
            {
                card.hot ? <div style={{color: 'red'}}>HOT</div> : null
            }
        </div>
    );
};

export default Card;

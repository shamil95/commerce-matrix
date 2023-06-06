import React, {useMemo} from 'react';
import {useSelector} from "react-redux";
import Card from "./Card/Card";

const Cards = () => {
    const {items, currentFilter} = useSelector(state => state.products);

    const cards = useMemo(() => {
        return items.filter(el => {
            if (currentFilter === null) {
               return el
            } else if (el.category === currentFilter) {
                return el
            }
        });
    }, [currentFilter, items])

    return (
        <div>
            {cards.map(card => <Card card={card}/>)}
        </div>
    );
};

export default Cards;

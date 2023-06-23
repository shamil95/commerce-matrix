import React, {useMemo, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeBasketData} from "../../redux/actions/products";

const Basket = () => {
    const dispatch = useDispatch();
    const basketProducts = useSelector(state => state.products.basketProducts);

    const onDeleteClick = (prd) => {
        dispatch(changeBasketData(prd))
    }



    return (
        <div>
            {
                basketProducts.map(product => (
                    <div key={product.id}>
                        <div>{product.title}</div>
                        <img src={product.image} alt="" style={{width: '150px'}}/>
                        <div>{product.category}</div>
                        <div>{product.price}</div>
                        <button onClick={() => onDeleteClick(product)}>delete</button>
                    </div>
                ))
            }
        </div>
    );
};

export default Basket;

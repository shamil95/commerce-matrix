import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getProducts} from "../../redux/actions/products";
import Filter from "./Filter/Filter";
import Cards from "./Cards/Cards";

const Products = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [])
    return (
        <div>
            <Filter/>
            <Cards/>
        </div>
    );
};

export default Products;

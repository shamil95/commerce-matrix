import React, {useEffect, useMemo} from 'react';
import Filters from "./Filters/Filters";
import {useDispatch, useSelector} from "react-redux";
import {buyProduct, getProductsByCategory, setBasket, setProducts} from "../../redux/actions/products";
import Ratings from "../Ratings/Ratings";

const Products = () => {
    const dispatch = useDispatch();
    const {products, currentCategory, searchValue, basketProducts} = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getProductsByCategory(currentCategory));
    }, [currentCategory]);

    useEffect(() => {
        return () => {
            dispatch(setProducts([]))
        }
    }, [])


    const searchedProducts = useMemo(() => {
        return products.filter(product => searchValue === '' ? product : product.title.toLowerCase().includes(searchValue.toLowerCase()
        ));
    }, [searchValue, products])

    const onProductClick = (prd) => {
        dispatch(setBasket(prd))
    }


    const onBuyProduct = (prd) => {
        dispatch(buyProduct(prd))
    }

    return (
        <div>
            <Filters/>
            <div>
                {
                    searchedProducts.map(product => (
                        <div key={product.id} onClick={() => onProductClick(product)}>
                            <div onClick={() => onBuyProduct(product)}>{product.title}</div>
                            <img src={product.image} alt="" style={{width: '150px'}}/>
                            <div>{product.category}</div>
                            <div>{product.price}</div>
                            <Ratings product={product}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Products;

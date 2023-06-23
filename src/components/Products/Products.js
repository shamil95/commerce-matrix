import React, {useEffect, useMemo} from 'react';
import Filters from "./Filters/Filters";
import {useDispatch, useSelector} from "react-redux";
import {getProductsByCategory, setBasket, setProducts} from "../../redux/actions/products";

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


    const SearchedProducts = useMemo(() => {
        return products.filter(product => searchValue === '' ? product : product.title.toLowerCase().includes(searchValue.toLowerCase()
        ));
    }, [searchValue, products])

    const onProductClick = (prd) => {
        dispatch(setBasket(prd))
    }

    return (
        <div>
            <Filters/>
            <div>
                {
                    SearchedProducts.map(product => (
                        <div key={product.id} onClick={() => onProductClick(product)}>
                            <div>{product.title}</div>
                            <img src={product.image} alt="" style={{width: '150px'}}/>
                            <div>{product.category}</div>
                            <div>{product.price}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Products;

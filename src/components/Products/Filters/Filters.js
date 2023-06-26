import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeCategory, changeSearchValue, getCategories} from "../../../redux/actions/products";


const Filters = () => {
    const dispatch = useDispatch();
    const {categories, currentCategory} = useSelector(state => state.products);

    const [placeholder, setPlaceholder] = useState('')

    useEffect(() => {
        dispatch(getCategories())
    }, []);

    const onCategoryChange = (e) => {
        const {value} = e.target;
        dispatch(changeCategory(value))
    }

    const onChangeSearch = (e) => {
        const {value} = e.target;
        dispatch(changeSearchValue(value))
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <select style={{marginRight: '20px'}} onChange={onCategoryChange} value={currentCategory}>
                {
                    categories.map(el => <option key={el.value} value={el.value}>{el.name}</option>)
                }
            </select>
            <input type="text" placeholder={placeholder} onChange={onChangeSearch}/>
        </div>
    );
};

export default Filters;

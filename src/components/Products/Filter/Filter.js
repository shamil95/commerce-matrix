import React from 'react';
import {useDispatch} from "react-redux";
import {setCurrentFilter} from "../../../redux/actions/products";

const filters = [
    {
        name: 'Elektronika',
        value: 'electronics',
    },
    {
        name: 'Kishi geyimleri',
        value: 'men\'s clothing',
    },
    {
        name: 'Qadin geyimleri',
        value: 'women\'s clothing',
    },
    {
        name: 'Zinyet Eshyalari',
        value: 'jewelery',
    },
]

const Filter = () => {
    const dispatch = useDispatch();

    const handleClickFilter = (value) => {
        dispatch(setCurrentFilter(value))
    };

    return (
        <div style={{display: 'flex'}}>
            {filters.map(filter => <div style={{marginRight: '10px'}} onClick={() => handleClickFilter(filter.value)}>{filter.name}</div>)}
        </div>
    );
};

export default Filter;

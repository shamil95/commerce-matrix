import axios from "axios";

export const getProducts = () => async (dispatch) => {
    const response = await axios.get('https://fakestoreapi.com/products');

    if (response.data) {
        const newData = response.data.map(el => {
            if (el.price < 50) {
                return {
                    ...el,
                    hot: true,
                }
            }
            return el
        })
        dispatch(setProducts(newData))
    }
};

export const setProducts = (payload) => {
    return {
        type: 'CHANGE_PRODUCTS',
        payload
    }
}

export const setCurrentFilter = (payload) => {
    return {
        type: 'CURRENT_FILTER_CHANGED',
        payload
    }
}

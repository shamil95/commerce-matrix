import axios from "axios";
import {MODAL_STATE_CHANGED, PRODUCTS_CHANGED} from "../types";

export const getProducts = () => async (dispatch) => {
    const {data} = await axios.get('https://fakestoreapi.com/products');

    dispatch(setProducts(data))
}

export const setProducts = (payload) => {
    return {
        type: PRODUCTS_CHANGED,
        payload
    }
}

export const setProductAndOpenModal = (product, isModalOpen) => {
    return {
        type: MODAL_STATE_CHANGED,
        payload: {product, isModalOpen}
    }
}

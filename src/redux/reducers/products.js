import {MODAL_STATE_CHANGED, PRODUCTS_CHANGED, USER_AUTH_CHANGED} from "../types";

const initialState = {
    marketProducts: [],
    isModalOpen: false,
    modalProduct: null
};

const products = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case PRODUCTS_CHANGED: {
            return {
                ...state,
                marketProducts: payload
            }
        }
        case MODAL_STATE_CHANGED: {
            return {
                ...state,
                modalProduct: payload.product,
                isModalOpen: payload.isModalOpen
            }
        }
        default:
            return state;
    }
};

export default products;

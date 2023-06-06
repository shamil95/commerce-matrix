const initialState = {
    items: [],
    currentFilter: null,
};

const products = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case 'CHANGE_PRODUCTS': {
            return {
                ...state,
                items: payload,
            }
        }
        case 'CURRENT_FILTER_CHANGED': {
            return {
                ...state,
                currentFilter: payload,
            }
        }
        default:
            return state;
    }
};

export default products;

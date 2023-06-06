const initialState = {
    isUserAuth: false,
    userData: null,
};

const user = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case 'CHANGE_USER': {
            return {
                ...state,
                isUserAuth: payload.isUserAuth,
                userData: payload.userData
            }
        }
        default:
            return state;
    }
};

export default user;

import axios from "axios";

export const loginUser = (params) => async (dispatch) => {
    const response = await axios.post("https://dummyjson.com/auth/login", params);

    if (response.data) {
        dispatch(setUser({isUserAuth: true, userData: response.data}));
        localStorage.setItem('token', response.data.token)
    }

}

export const setUser = (payload) => {
    return {
        type: 'CHANGE_USER',
        payload
    }
}

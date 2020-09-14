import { SHOW_LOADER, HIDE_LOADER } from "./action";

const initialState = {
    showLoader: false
};

const loaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return { ...state, showLoader: true };
        case HIDE_LOADER:
            return { ...state, showLoader: false };
        default:
            return state;
    }
};

export default loaderReducer;

export const showLoader = () => {
    return { type: SHOW_LOADER };
};

export const hideLoader = () => {
    return { type: HIDE_LOADER };
};

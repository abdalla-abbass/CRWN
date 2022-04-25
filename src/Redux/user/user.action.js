import { SET_CURRENT_USER } from "./userActionTypes";

export const setCurrnetUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        payload: user,
    };
};

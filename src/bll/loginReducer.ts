import {AppStateType} from "./store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {authAPI} from "../myApi/authAPI";

const LOGIN_SUCCESS = "CARDS/LOGINREDUCER/LOGIN_SUCCESS"
const LOGIN_ERROR = "CARDS/LOGINREDUCER/LOGIN_ERROR"

type InitialStateType = typeof initialState;

export const initialState = {
    errorMessage: "",
    isAuth: false,
    isDisabled: false,
    isFetching: false,
}

export const loginReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case LOGIN_SUCCESS: {
            return {
                ...state,
                isAuth: true,
                isDisabled: true,
                isFetching: true,
            }
        }
        case LOGIN_ERROR: {
            return {
                ...state,
                isAuth: action.isAuth,
                errorMessage: action.errorMessage,
            }
        }
        default: {
            return state
        }
    }
}


const loginSuccsess = (token: string) => {
    return {
        type: LOGIN_SUCCESS,
        token
    }
}
const showError = () => {
    return {
        type: LOGIN_ERROR,
        errorMessage: "smth wrong"
    }
}
const disableBtn = (isDisabled: boolean) => {

}

type ThunkType = ThunkAction<void, AppStateType, unknown, any>;

type DispatchType = ThunkDispatch<AppStateType, unknown, any>;

//thunk
export const signIn = (email: string, password: string, rememberMe: boolean): ThunkType => async (dispatch: DispatchType) => {
    try {
        const res = await authAPI.login(email, password, rememberMe)
        dispatch(loginSuccsess(res.data.token))
    } catch (e) {
        dispatch(showError())
        // alert(e.response.data.error)
    }
}
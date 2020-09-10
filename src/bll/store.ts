import {applyMiddleware, combineReducers, createStore} from "redux";
import {loginReducer} from "./loginReducer";
import thunk from "redux-thunk";

let rootReducer = combineReducers({
    login: loginReducer,
})

export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>
export const store = createStore(rootReducer, applyMiddleware(thunk));
import {combineReducers} from "redux";
import coinReducer from './coin.reducer'

export const RootReducer = combineReducers({coinReducer})

export type AppState = ReturnType<typeof RootReducer>
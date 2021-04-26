import {Reducer} from "redux";

import { CoinState } from './../types/coin.types';

interface fnMap {
    [key: string]: (state: any, payload?: any) => void
}

type FunctionMap = fnMap
type State = CoinState

type CreateReducer<S = State, fnMap = FunctionMap> = (initialState: S, fnMap: FunctionMap) => Reducer

export const createReducer: CreateReducer = (initialState, fnMap) => (state = initialState, action) => {
    const handler = fnMap[action.type]
    return handler ? handler(state, action.payload) : state
}
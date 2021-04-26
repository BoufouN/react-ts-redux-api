import {createReducer} from "../utils/createreducer.function";
import { CoinTypes, CoinState } from "../types/coin.types";
import { Coin } from "../../common/interfaces/coin.interface";

const initialState: CoinState = {
    coins: [],
    isLoading: false,
    errors: null
}

const fetchCoinsStart = (state: CoinState) => ({
    ...state,
    isLoading: true,
    errors: null,
    coins: []
})
const fetchCoinSuccess = (state: CoinState, payload: Coin[]) => ({
    ...state,
    isLoading: false,
    coins: payload,
    errors: null
})
const fetchCoinFailure = (state: CoinState, payload: string) => ({
    ...state,
    isLoading: false,
    coins: [],
    errors: payload
})


export default createReducer(initialState, {
    [CoinTypes.FETCH_COINS_START]: fetchCoinsStart,
    [CoinTypes.FETCH_COINS_SUCCESS]: fetchCoinSuccess,
    [CoinTypes.FETCH_COINS_FAILURE]: fetchCoinFailure
})
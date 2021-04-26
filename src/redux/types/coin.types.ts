import { Coin } from "../../common/interfaces/coin.interface";

export enum CoinTypes {
    FETCH_COINS_START = "FETCH_COINS_START",
    FETCH_COINS_SUCCESS = "FETCH_COINS_SUCCESS",
    FETCH_COINS_FAILURE = "FETCH_COINS_FAILURE"
}

export interface CoinState {
    coins: Coin[]
    isLoading: boolean
    errors: string | null
}
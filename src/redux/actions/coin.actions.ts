import {useCallback} from 'react';
import {useDispatch} from "react-redux";
import axios from 'axios'

import { CoinTypes } from "../types/coin.types";

export const useCoinActions = () => {
    const dispatch = useDispatch();

    const fetchCoins = useCallback(() => {
        dispatch({type: CoinTypes.FETCH_COINS_START})
        axios
            .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(res => dispatch({type: CoinTypes.FETCH_COINS_SUCCESS, payload: res.data}))
            .catch(() => dispatch({type: CoinTypes.FETCH_COINS_FAILURE, payload: 'Data could not be loaded'}))
    }, [dispatch])

    return {fetchCoins}
}

export interface UseCoinActions {
    fetchCoins: () => void
}
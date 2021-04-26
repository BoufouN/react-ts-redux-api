import React, { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Coin } from '../../common/interfaces/coin.interface';
import { ActionsContext } from '../../contexts/actions.context';
import { AppState } from '../../redux/reducers/root.reducer';
import CoinsGridItem from './coins-grid-item/coins-grid-item.component';

import './coins-grid.component.css';

const CoinsGrid = () => {
    const actions = useContext(ActionsContext);
    const {isLoading, errors, coins} = useSelector((state: AppState) => state.coinReducer);

    useEffect(() => {
        actions?.coins.fetchCoins()
    }, [])

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (errors) {
        return <div>{errors}</div>
    }

    return (
        <div className="coins-grid">
            {coins.map((coin: Coin, id: string) => <CoinsGridItem coin={coin} key={id}/>)}
        </div>
    )
}

export default CoinsGrid
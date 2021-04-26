import React from 'react';

import { Coin } from '../../../common/interfaces/coin.interface';

import './coins-grid-item.component.css';

const CoinsGridItem: React.FC<{ coin: Coin }> = ({ coin }: { coin: Coin }) => {
    return (
        <div className={`coin-grid-item cgi-${coin.id}`}>
            <p>{coin.id}</p>
            <p>{coin.symbol}</p>
            <p>{coin.name}</p>
            <p>{coin.symbol}</p>
            <img className="coin" alt={`${coin.name} logo`} src={`${coin.image}`} />
            <p>{coin.current_price}</p>
            <p>{coin.ath_change_percentage}</p>
        </div>
    )
}

export default CoinsGridItem
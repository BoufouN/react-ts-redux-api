import React from 'react';

import { Coin } from '../../../common/interfaces/coin.interface';

import './coins-grid-item.component.css';

const CoinsGridItem: React.FC<{ coin: Coin }> = ({ coin }: { coin: Coin }) => {
    return (
        <div>
            <p>{coin.id}</p>
            <p>{coin.title}</p>
            <p>{coin.icon}</p>
        </div>
    )
}

export default CoinsGridItem
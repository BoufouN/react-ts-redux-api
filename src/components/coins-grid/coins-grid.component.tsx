import React from 'react';

import { Coin } from '../../common/interfaces/coin.interface';
import CoinsGridItem from './coins-grid-item/coins-grid-item.component';

import './coins-grid.component.css';

interface CoinGridProps {
    coins: Coin[]
}

const CoinsGrid: React.FC<CoinGridProps> = ({ coins }: CoinGridProps) => {
    return (
        <div className="coins-grid">
            {coins.map(coin => (
                <div key={coin.id}>
                    <CoinsGridItem coin={coin} />
                </div>
            ))}
        </div>
    )
}

export default CoinsGrid
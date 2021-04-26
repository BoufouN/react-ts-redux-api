import React from 'react';
import { Coin } from '../../common/interfaces/coin.interface';
import CoinsGrid from '../../components/coins-grid/coins-grid.component';

const Home: React.FC = () => {
    const coins: Coin[] = [
        {
            id: '1',
            title: 'Coin 1',
            icon: 'AAAAA'
        },
        {
            id: '2',
            title: 'Coin 2',
            icon: 'BBBBB'
        }
    ]

    return (
        <div className="home">
            <CoinsGrid coins={coins} />
        </div>
    )
}

export default Home;
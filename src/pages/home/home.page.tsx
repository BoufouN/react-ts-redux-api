import React from 'react';

import {useActions} from "../../redux/actions/all.actions";
import {ActionsProvider} from "../../contexts/actions.context";
import CoinsGrid from '../../components/coins-grid/coins-grid.component';   

const Home: React.FC = () => {
    const actions = useActions()

    return (
        <ActionsProvider value={actions}>
            <div className="home">
                <CoinsGrid />
            </div>
        </ActionsProvider>
    )
}

export default Home;
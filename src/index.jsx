import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import Store from './redux/Store';
import App from './components/app/app.component';

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false
// https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=eur&days=1&interval=hourly

ReactDOM.render(
  <React.StrictMode>
      <Provider store={Store}>
        <App />
      </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);
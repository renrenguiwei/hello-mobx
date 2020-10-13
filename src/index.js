import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import stores from './stores';
import { configure } from 'mobx'
import { Provider } from 'mobx-react'

configure({ enforceActions: 'observed' }) // 强制使用action改变数据

ReactDOM.render(
  <Provider { ...stores }>
    <App/>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

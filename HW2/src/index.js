import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'


import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import store from './store';
import {Provider} from 'react-redux' //用react-redux 使用Provider 引入store

ReactDOM.render(
  
    // App才可以引入外層的store數據
    <Provider store={store}> 
        <App/>
    </Provider>
    ,document.getElementById("root"));
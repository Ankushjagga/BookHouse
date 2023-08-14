import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import store from './redux/Store';
// import Cart from './context/Cart';
import {Provider} from "react-redux"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//  <Cart>

<Provider store={store}>

    <BrowserRouter>
    <App />
    </BrowserRouter>
</Provider>
//  </Cart>
    
);



import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import styles from './styles/main.scss';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
});

const store = createStore(rootReducer(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

const wrapper = document.getElementById("myApp");
wrapper ? ReactDOM.render(app, wrapper) : false;
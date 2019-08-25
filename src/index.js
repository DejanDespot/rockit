import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import styles from './styles/main.scss';

const wrapper = document.getElementById("myApp");
wrapper ? ReactDOM.render(<App/>, wrapper) : false;
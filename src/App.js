import React, { Component } from "react";
import { hot } from 'react-hot-loader/root';
import MainView from "./Views/MainView";

class App extends Component {
    render() {
        return (
            <div style={{width: '100%', height: '100%'}}>
                <MainView/>
            </div>
        );
    }
}

export default hot(App);
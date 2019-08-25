import React, { Component } from "react";
import { hot } from 'react-hot-loader/root';
import MainView from "./Views/MainView";

class App extends Component {
    render() {
        return (
            <div>
                <MainView/>
            </div>
        );
    }
}

export default hot(App);
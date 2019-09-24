import React, { Component } from "react";
import { hot } from 'react-hot-loader/root';
import MainView from "./Views/MainView";

class App extends Component {

    state = {
        isMobile : window.innerWidth < 768
    };

    componentDidMount() {
        console.log(this.state.isMobile);
        window.addEventListener('resize', this.handleResize)
    }

    handleResize = () => {
        let width = window.innerWidth;
        if (width < 768 && !this.state.isMobile) {
            this.setState({
                isMobile: true
            })
        }

        else if (width > 768 && this.state.isMobile) {
            this.setState({
                isMobile: false
            })
        }
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

    render() {
        return (
            <div style={{width: '100%', height: '100%'}}>
                <MainView />
            </div>
        );
    }
}

export default hot(App);
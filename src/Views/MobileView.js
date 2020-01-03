import React, {Component} from 'react';
import styles from '../Styles/mobile_view.scss';
import Header from '../Components/MobileView/Header';
import MainSection from '../Containers/MobileView/MainSection';
import ControlBar from '../Containers/MobileView/ControlBar';
import NavBar from '../Containers/MobileView/NavBar';
import ControlDrawer from '../Containers/MobileView/ControlDrawer';

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Search from '../Containers/MobileView/Search';


class MobileView extends Component {
    state = {
        isOpen: false
    }

    controlDrawerOpenHandler = () => {
        this.setState((prevState) => {
            return {isOpen: !prevState.isOpen}
        });
        // alert('AND?');
    }

    controlDraweCloseHandler = () => {
        this.setState((prevState) => {
            return {isOpen: !prevState.isOpen}
        });
        // alert('AND?');
    }

    render() {
        return (
            <div className={styles.mobileView}>
                <Header />
                <MainSection />
                <ControlBar open={this.state.isOpen} click={this.controlDrawerOpenHandler} />
                <NavBar />
                <ControlDrawer open={this.state.isOpen} click={this.controlDraweCloseHandler} />
            </div>
        );
    }
}

export default MobileView;
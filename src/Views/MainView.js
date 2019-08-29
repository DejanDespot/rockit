import React, {Component} from 'react';
import styles from '../Styles/main_view.scss'
import NavBar from "../Components/NavBar";
import SideBar from "../Containers/SideBar";
import ControlBar from '../Containers/ControlBar';

class MainView extends Component {
    render() {
        return (
            <div className={styles.mainView}>
                <NavBar />
                <SideBar />
                <ControlBar />
            </div>
        );
    }
}

export default MainView;
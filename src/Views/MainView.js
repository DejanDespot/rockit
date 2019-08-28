import React, {Component} from 'react';
import styles from '../Styles/main_view.scss'
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";

class MainView extends Component {
    render() {
        return (
            <div className={styles.mainView}>
                <NavBar />
                <SideBar />
            </div>
        );
    }
}

export default MainView;
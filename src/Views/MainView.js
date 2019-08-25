import React, {Component} from 'react';
import styles from '../Styles/main_view.scss'
import NavBar from "../Components/NavBar";

class MainView extends Component {
    render() {
        return (
            <div className={styles.mainView}>
                <NavBar/>
            </div>
        );
    }
}

export default MainView;
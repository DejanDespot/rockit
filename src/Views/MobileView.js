import React, {Component} from 'react';
import styles from '../Styles/mobile_view.scss';
import Header from '../Components/MobileView/Header';
import MainSection from '../Containers/MobileView/MainSection';
import ControlBar from '../Containers/MobileView/ControlBar';
import NavBar from '../Containers/MobileView/NavBar';

class MobileView extends Component {
    render() {
        return (
            <div className={styles.mobileView}>
                <Header />
                <MainSection />
                <ControlBar />
                <NavBar />
            </div>
        );
    }
}

export default MobileView;
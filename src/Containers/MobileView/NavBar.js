import React, {Component} from 'react';
import styles from '../../Styles/MobileView/navBar.scss';
import browseIcon from '../../Assets/Icons/vinyl.svg'; 
import libraryIcon from '../../Assets/Icons/music.svg';
import searchIcon from '../../Assets/Icons/magnifying-glass.svg';
import homeIcon from '../../Assets/Icons/house-black.svg';

class NavBar extends Component {
    render() {
        return (
            <div className={styles.navBar}>
                <img src={homeIcon} className={styles.homeIcon} /> 
                <img src={browseIcon} className={styles.browseIcon} />
                <img src={searchIcon} className={styles.searchIcon} />                
                <img src={libraryIcon} className={styles.libraryIcon} />                                               
            </div>
        );
    }
}

export default NavBar;
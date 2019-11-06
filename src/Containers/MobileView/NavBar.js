import React, {Component} from 'react';
import styles from '../../Styles/MobileView/navBar.scss';
import browseIcon from '../../Assets/Icons/vinyl.svg'; 
import libraryIcon from '../../Assets/Icons/music.svg';
import searchIcon from '../../Assets/Icons/magnifying-glass.svg';
import homeIcon from '../../Assets/Icons/house-black.svg';

class NavBar extends Component {
    render() {
        return (
            <div className={styles.NavBar}>
                <img src={homeIcon} className={styles.HomeIcon} /> 
                <img src={browseIcon} className={styles.BrowseIcon} />
                <img src={searchIcon} className={styles.SearchIcon} />                
                <img src={libraryIcon} className={styles.LibraryIcon} />                                               
            </div>
        );
    }
}

export default NavBar;
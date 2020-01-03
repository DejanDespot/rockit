import React, {Component} from 'react';
import styles from '../../Styles/MobileView/navBar.scss';
import browseIcon from '../../Assets/Icons/vinyl.svg'; 
import libraryIcon from '../../Assets/Icons/music.svg';
import searchIcon from '../../Assets/Icons/magnifying-glass.svg';
import homeIcon from '../../Assets/Icons/house-black.svg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class NavBar extends Component {
    render() {
        return (
            <Router>
                <div className={styles.NavBar}>
                    <Link to="/" ><img src={homeIcon} className={styles.HomeIcon} /></Link>
                    {/* <img src={browseIcon} className={styles.BrowseIcon} /> */}
                    <Link to="/search"><img src={searchIcon} className={styles.SearchIcon} /></Link>                
                    {/* <img src={libraryIcon} className={styles.LibraryIcon} />                                                */}
                </div>
            </Router>
        );
    }
}

export default NavBar;
import React, {Component} from 'react';
import styles from '../Styles/navbar.scss';
import backButton from '../Assets/Icons/back.svg';
import logo from '../Assets/Icons/play-button.svg';
import person from '../Assets/Images/person.png';
import SearchBar from "../Containers/SearchBar";
import classNames from 'classnames';

class NavBar extends Component {
    render() {
        return (
            <div className={styles.navBar}>
                <div className={styles.navBlock}>
                    <img src={backButton} alt="Back" role="button" className={styles.backButton}/>
                    <SearchBar/>
                </div>
                <div className={styles.navBlock}>
                    <div className={classNames(styles.navBlock, styles.logoSection)}>
                        <img src={logo} alt="logo"/>
                        <div className={styles.title}>Rockit</div>
                    </div>
                    <div className={styles.navBlock}>
                        <img src={person} alt="User image"/>
                        <div className={styles.dropdownGroup}>
                            <div className={styles.userName}>Nicolas Gruber</div>
                            <img src={backButton} alt="Back" role="button" className={styles.dropdownHandle}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;
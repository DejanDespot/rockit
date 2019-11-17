import React, {Component} from 'react';
import styles from '../Styles/navbar.scss';
import BackButton from '../Assets/Icons/back.svg';
import Logo from '../Assets/Icons/play-button.svg';
import Person from '../Assets/Images/person.png';
import SearchBar from "../Containers/SearchBar";
import classNames from 'classnames';

class NavBar extends Component {
    render() {
        return (
            <div className={styles.NavBar}>
                <div className={styles.NavBlock}>
                    <img src={BackButton} alt="Back" role="button" className={styles.BackButton}/>
                    <SearchBar/>
                </div>
                <div className={styles.NavBlock}>
                    <div className={classNames(styles.NavBlock, styles.LogoSection)}>
                        <img src={Logo} alt="logo"/>
                        <div className={styles.Title}>Rockit</div>
                    </div>
                    <div className={styles.NavBlock}>
                        <img src={Person} alt="User image"/>
                        <div className={styles.DropdownGroup}>
                            <div className={styles.UserName}>Nicolas Gruber</div>
                            <img src={BackButton} alt="Back" role="button" className={styles.DropdownHandle}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;
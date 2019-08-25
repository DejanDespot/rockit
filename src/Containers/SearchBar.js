import React, {Component} from 'react';
import styles from '../Styles/search_bar.scss';
import searchIcon from '../Assets/Icons/magnifying-glass.svg'
import cancel from '../Assets/Icons/cancel.svg'

class SearchBar extends Component {
    render() {
        return (
            <div className={styles.searchBar} name="search">
                <div className={styles.searchGroup}>
                    <img src={searchIcon} alt="search"/>
                    <label htmlFor="search">Search</label>
                </div>
                <img src={cancel} className={styles.cancelIcon} alt="cancel"/>
            </div>
        );
    }
}

export default SearchBar;
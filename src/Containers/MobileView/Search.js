import React, { Component } from 'react';
import styles from '../../Styles/MobileView/search.scss';

class Search extends Component {
    render() {
        return (
            <div className={styles.filter}>
                <img src={FilterImg} /> 
                    <div className={styles.Form} >
                        <input type="text" name="search" required autoComplete="off" />
                        <label for="search" className={styles.LabelSearch}>
                            <span className={styles.ContentSearch}>Search</span>
                        </label>
                    </div>
            </div>
        );
    }
}

export default Search;
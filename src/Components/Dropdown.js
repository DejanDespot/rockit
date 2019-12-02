import React from 'react';
import styles from '../Styles/dropdown.scss';
import classNames from 'classnames';

const dropdown = (props) => (
    <div className={classNames(styles.Dropdown, (props.open ? styles.Open : styles.Closed))}>
        <div>settings</div>
        <div>about</div>
        <div>log out</div>
    </div>
);

export default dropdown;
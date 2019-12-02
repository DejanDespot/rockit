import React from 'react';
import styles from '../Styles/options.scss';
import classNames from 'classnames';

const options = (props) => (
    <div className={classNames(styles.Options, (props.open ? styles.Open : styles.Closed))}>
        <div>copy playlist</div>
        <div>delete playlist</div>
        <div>share playlist</div>
    </div>
);

export default options;
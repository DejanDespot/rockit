import React from 'react';
import styles from '../Styles/sidebar.scss';
import addPlaylist from '../Assets/Icons/plus.svg';

const playlists = () => (
    <div className={styles.sideBlock}>
            <div className={styles.title}>Playlists</div>
            <p>Top Pop 2019</p>
            <p>Metalike operite se dolje</p>
            <p>Gaycore for sad days</p>
            <p>Extreme workout hard boner material</p>
            <div className={styles.sideGroup}>
                <img src={addPlaylist} />
                <div>New Playlist</div>
            </div>
        </div>
);

export default playlists;
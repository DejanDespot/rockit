import React from 'react';
import styles from '../Styles/sidebar.scss';
import browseIcon from '../Assets/Icons/vinyl.svg'; 
import libraryIcon from '../Assets/Icons/music.svg';
import addPlaylist from '../Assets/Icons/plus.svg';
import currentSong from '../Assets/Images/coby.jpg';


const SideBar = () => (
    <div className={styles.sidebar}>
        <div className={styles.sideBlock}>
            <div className={styles.title}>MAIN MENU</div>
            <div className={styles.sideGroup}>
                <img src={browseIcon} />
                <div>Browse</div>
            </div>
            <div className={styles.sideGroup}>
                <img src={libraryIcon} />
                <div>My Library</div>
            </div>
        </div>
        <div className={styles.sideBlock}>
            <div className={styles.title}>PLAYLISTS</div>
            <p>Top Pop 2019</p>
            <p>Metalike operite se dolje</p>
            <p>Gaycore fot sad days</p>
            <p>Extreme workout hard boner material</p>
            <div className={styles.sideGroup}>
                <img src={addPlaylist} />
                <div>New Playlist</div>
            </div>
        </div>
        <div className={styles.sideBlock}>
            <img src={currentSong} className={styles.songArt} />
            <div className={styles.currentTrack}>
                <p>Coby</p>
                <p>Traka</p>
            </div>
        </div>
    </div>
);

export default SideBar;
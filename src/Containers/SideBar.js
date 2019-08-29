import React, { Component } from 'react';
import styles from '../Styles/sidebar.scss';
import browseIcon from '../Assets/Icons/vinyl.svg'; 
import libraryIcon from '../Assets/Icons/music.svg';
import currentSong from '../Assets/Images/coby.jpg';

import Playlists from '../Components/Playlists';


class SideBar extends Component {
    render() {
        return(
            <div className={styles.sideBar}>
                <div className={styles.sideBlock}>
                    <div className={styles.title}>Main menu</div>
                    <div className={styles.sideGroup}>
                        <img src={browseIcon} />
                        <div>Browse</div>
                    </div>
                    <div className={styles.sideGroup}>
                        <img src={libraryIcon} />
                        <div>My Library</div>
                    </div>
                </div>
                <Playlists />
                <div className={styles.sideBlock}>
                    <img src={currentSong} className={styles.songArt} />
                    <div className={styles.currentTrack}>
                    <p>Coby</p>
                    <p>Traka</p>
                </div>
            </div>
        </div>
        );
    }
}

export default SideBar;
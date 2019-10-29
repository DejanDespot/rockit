import React, {Component} from 'react';
import styles from '../../Styles/MobileView/recent_playlists.scss';
import PlaylistImage from '../../Assets/Images/coby.jpg';

class RecentPlaylists extends Component {
    render() {
        return (
            <div className={styles.RecentPlaylists}>
                <div className={styles.Playlist}>
                    <img src={PlaylistImage} alt='Playlist Image' />
                    <div>Top pop 2019</div>
                    <div>Playlist</div>
                </div>
                <div className={styles.Playlist}>
                    <img src={PlaylistImage} alt='Playlist Image' />
                    <div>Top metal 2019</div>
                    <div>Playlist</div>
                </div>
                <div className={styles.Playlist}>
                    <img src={PlaylistImage} alt='Playlist Image' />
                    <div>Top k-pop 2019</div>
                    <div>Playlist</div>
                </div>
                <div className={styles.Playlist}>
                    <img src={PlaylistImage} alt='Playlist Image' />
                    <div>Top djent 2019</div>
                    <div>Playlist</div>
                </div>
                <div className={styles.Playlist}>
                    <img src={PlaylistImage} alt='Playlist Image' />
                    <div>Top porn 2019</div>
                    <div>Playlist</div>
                </div>
                <div className={styles.Playlist}>
                    <img src={PlaylistImage} alt='Playlist Image' />
                    <div>Top blues 2019</div>
                    <div>Playlist</div>
                </div>
                <div className={styles.Playlist}>
                    <img src={PlaylistImage} alt='Playlist Image' />
                    <div>Top country 2019</div>
                    <div>Playlist</div>
                </div>
            </div>
        );
    }
}

export default RecentPlaylists;
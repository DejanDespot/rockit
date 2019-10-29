import React, {Component} from 'react';
import styles from '../../Styles/MobileView/main_section.scss';
import RecentPlaylists from './RecentPlaylists';

class MainSection extends Component {
    render() {
        return (
            <div className={styles.mainSection}>
                <div className={styles.RecentlyPlayed} ><div>Recently played</div></div>
                <RecentPlaylists />
            </div>
        );
    }
}

export default MainSection;
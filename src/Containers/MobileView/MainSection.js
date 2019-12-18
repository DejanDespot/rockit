import React, {Component} from 'react';
import styles from '../../Styles/MobileView/main_section.scss';
// import RecentPlaylists from './RecentPlaylists';
import Songs from '../MobileView/Songs';

class MainSection extends Component {
    render() {
        return (
            <div className={styles.MainSection}>
                <div className={styles.MyLibrary} ><div>my library</div></div>
                {/* <RecentPlaylists /> */}
                <div className={styles.list}>
                        <div className={styles.infoLabels}>
                            <div>#</div>
                            <div>Title</div>
                            <div>Artist</div>
                            <div>Duration</div>
                        </div>
                        <Songs onPlayHandle={(index) => this.onPlayRequested(index)} />
                    </div>
            </div>
        );
    }
}

export default MainSection;
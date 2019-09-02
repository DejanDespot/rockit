import React, { Component } from 'react';
import styles from '../Styles/main_section.scss';
import PlaylistImage from '../Assets/Images/coby.jpg';
import Options from '../Assets/Icons/options.svg';
import FilterImg from '../Assets/Icons/magnifying-glass.svg';
import Songs from '../Containers/Songs';

class MainSection extends Component {
    render() {
        return (
            <div className={styles.mainSection}>
                <div className={styles.mainBlock}>
                    <img src={PlaylistImage} className={styles.mainImage}/>
                    <div className={styles.infoAndButtons}>
                        <div className={styles.info}>
                            <p>Playlist</p>
                            <div className={styles.playlistName}>Top pop 2019</div>
                            <div className={styles.playlistNumbers}>
                                <div>10 songs</div>
                                <div>45 minutes</div>
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <div className={styles.play}>Play</div>
                            <img src={Options} />
                        </div>
                    </div>
                </div>
                {/* <div className={classNames(styles.mainBlock, styles.lastBlock)}> */}
                <div className={styles.mainBlock}>
                    <div className={styles.filter}>
                        <img src={FilterImg} /> 
                        <p>Filter</p>
                    </div>
                    <div className={styles.list}>
                        <div className={styles.infoLabels}>
                            <div>#</div>
                            <div>Title</div>
                            <div>Artist</div>
                            <div>Duration</div>
                        </div>
                        <Songs />
                    </div>
                </div>
            </div>
        );
    }
}

export default MainSection;
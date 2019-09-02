import React, { Component } from 'react';
import styles from '../Styles/main_section.scss';
import PlaylistImage from '../Assets/Images/coby.jpg';
import Options from '../Assets/Icons/options.svg';
import FilterImg from '../Assets/Icons/magnifying-glass.svg';

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
                        <div className={styles.songs}>
                            <div className={styles.song}>
                                <div>1</div>
                                <div>Leto je</div>
                                <div>Coby</div>
                                <div>3:23</div>
                            </div>
                            <div className={styles.song}>
                                <div>2</div>
                                <div>Biseri od zlata</div>
                                <div>Coby</div>
                                <div>3:16</div>
                            </div>
                            <div className={styles.song}>
                                <div>3</div>
                                <div>Samo jako</div>
                                <div>Coby feat. Stoja</div>
                                <div>4:16</div>
                            </div>
                            <div className={styles.song}>
                                <div>4</div>
                                <div>Zver</div>
                                <div>Coby</div>
                                <div>3:06</div>
                            </div>
                            <div className={styles.song}>
                                <div>5</div>
                                <div>Lukas</div>
                                <div>Coby</div>
                                <div>3:29</div>
                            </div>
                            <div className={styles.song}>
                                <div>6</div>
                                <div>Title</div>
                                <div>Coby feat. Senidah</div>
                                <div>2:59</div>
                            </div>
                            <div className={styles.song}>
                                <div>7</div>
                                <div>Mami</div>
                                <div>Coby</div>
                                <div>3:06</div>
                            </div>
                            <div className={styles.song}>
                                <div>8</div>
                                <div>Rambo</div>
                                <div>Coby</div>
                                <div>3:38</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainSection;
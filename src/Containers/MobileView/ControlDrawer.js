import React, { Component } from 'react';
import styles from '../../Styles/MobileView/control_drawer.scss';
import Repeat from '../../Assets/Icons/MobileView/repeat.svg';
import Previous from '../../Assets/Icons/MobileView/previous.svg';
import Pause from '../../Assets/Icons/MobileView/rounded-pause-button.svg';
import Play from '../../Assets/Icons/MobileView/play-button-inside-a-circle.svg';
import Next from '../../Assets/Icons/MobileView/next.svg';
import Shuffle from '../../Assets/Icons/MobileView/shuffle.svg';
import Playlist from '../../Assets/Images/coby.jpg';
import Toggle from '../../Assets/Icons/MobileView/back.svg';
import VolumeSlider from '../VolumeSlider';
import VolumeIcon from '../../Assets/Icons/volume.svg';


class ControlDrawer extends Component {
    
    render() {
        let attachedClasses = [styles.ControlDrawer, styles.Close];
        if (this.props.open) {
            attachedClasses = [styles.ControlDrawer, styles.Open]
        }
        return (
            <div className={attachedClasses.join(' ')}>
                    <div className={styles.ToggleButton}>
                        <img src={Toggle} onClick={this.props.click} alt="Toggle" />
                    </div>
                    <div className={styles.TrackInfo}>
                        <div>Top pop 2019</div>
                        <img src={Playlist} />
                        <div>4 strane sveta</div>
                        <div>Coby feat. senidah</div>
                    </div>
                    <div className={styles.Volume}>
                        <img src={VolumeIcon} />
                        <VolumeSlider />
                    </div>
                    <div className={styles.TrackButtons}>
                        <img src={Repeat} />
                        <div className={styles.MainControls}>
                            <img src={Previous} />
                            <img src={Pause} />
                            <img src={Next} />
                        </div>
                        <img src={Shuffle} />
                    </div>
            </div>
        );
    }
}

export default ControlDrawer;
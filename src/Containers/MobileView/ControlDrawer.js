import React, { Component } from 'react';
import styles from '../../Styles/MobileView/control_drawer.scss';
import Repeat from '../../Assets/Icons/repeat.svg';
import Previous from '../../Assets/Icons/previous.svg';
import Pause from '../../Assets/Icons/rounded-pause-button.svg';
import Play from '../../Assets/Icons/play-button-inside-a-circle.svg';
import Next from '../../Assets/Icons/next.svg';
import Shuffle from '../../Assets/Icons/shuffle.svg';
import Playlist from '../../Assets/Images/coby.jpg';
import Toggle from '../../Assets/Icons/back.svg';


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
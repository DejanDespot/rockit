import React, { Component } from 'react';
import styles from '../Styles/control_bar.scss';
import PreviousButton from '../Assets/Icons/previous.svg';
import PlayButton from '../Assets/Icons/play-button-inside-a-circle.svg';
import NextButton from '../Assets/Icons/next.svg';
import Timeline from '../Assets/Images/timeline.png';
import RepeatButton from '../Assets/Icons/repeat.svg';
import ShuffleButton from '../Assets/Icons/shuffle.svg';
import VolumeIcon from '../Assets/Icons/volume.svg';

class ControlBar extends Component {
    render() {
        return (
            <div className={styles.controlbar}>
                <div className={styles.controlBlock}>
                    <img src={PreviousButton} className={styles.prev} />
                    <img src={PlayButton} className={styles.play}/>
                    <img src={NextButton} className={styles.next}/>
                </div>
                <div className={styles.time}>
                    <img src={Timeline} className={styles.timeline} />
                </div>
                <div className={styles.controlBlock}>
                    <img src={RepeatButton} />
                    <img src={ShuffleButton} />
                    <img src={VolumeIcon} />
                    <div className={styles.volumeBar}></div>
                </div>
            </div>
        );
    }
}

export default ControlBar;
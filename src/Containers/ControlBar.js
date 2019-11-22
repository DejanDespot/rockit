import React, { Component } from 'react';
import styles from '../Styles/control_bar.scss';
import PreviousButton from '../Assets/Icons/previous.svg';
import PlayButton from '../Assets/Icons/play-button-inside-a-circle.svg';
import PauseButton from '../Assets/Icons/rounded-pause-button.svg';
import NextButton from '../Assets/Icons/next.svg';
import Timeline from '../Assets/Images/timeline.png';
import RepeatButton from '../Assets/Icons/repeat.svg';
import ShuffleButton from '../Assets/Icons/shuffle.svg';
import VolumeIcon from '../Assets/Icons/volume.svg';
import AudioPlayerService from "../Utils/audioPlayerService";
// import audio1 from "../Assets/Audio/bensound-allthat.mp3";
import * as actions from '../store/actions/player';
import {connect} from "react-redux";

const audioPlayer = AudioPlayerService;

class ControlBar extends Component {
    onPlayRequested = () => {
        audioPlayer.playSound();
        this.props.togglePlay();
    };

    onNextRequested = (index) => {
        audioPlayer.playNextSound(index);
    };

    render() {
        // console.log();
        return (
            <div className={styles.controlbar}>
                <div className={styles.controlBlock}>
                    <img src={PreviousButton} className={styles.prev} />
                    <img src={this.props.playing ? PauseButton: PlayButton} className={styles.play} onClick={this.onPlayRequested}/>
                    <img src={NextButton} className={styles.next} onClick={() => this.onNextRequested(this.props.currentSong)} />
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

const mapStateToProps = state => {
    console.log(state);
    return {
        playing: state.player.playing,
        currentSong: state.player.currentSong
    };
};

const mapDispatchToProps = dispatch => {
    return {
        togglePlay: () => {
            dispatch(actions.togglePlay())
        }
    };
};

export default (connect(mapStateToProps, mapDispatchToProps)(ControlBar));
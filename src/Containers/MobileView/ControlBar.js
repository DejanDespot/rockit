import React, {Component} from 'react';
import styles from '../../Styles/MobileView/control_bar.scss';
import BackButton from '../../Assets/Icons/back.svg';
import NextButton from '../../Assets/Icons/next.svg'; 
import PauseButton from '../../Assets/Icons/rounded-pause-button.svg';
import PlayButton from '../../Assets/Icons/play-button-inside-a-circle.svg';

import AudioPlayerService from "../../Utils/audioPlayerService";
import * as actions from '../../store/actions/player';
import {connect} from "react-redux";
import songs from '../../Utils/songs';

const audioPlayer = AudioPlayerService;


class ControlBar extends Component {
    componentDidMount() {
        // enable the spacebar to function as a play trigger
        window.addEventListener('keyup', (event) => {
            if (event.code === 'Space' || event.which === 32) {
                this.onPlayRequested(this.props.currentSong);
            }
        })
    }

    onPlayRequested = (index) => {
        //
        let songIndex = index || 0;
        if (index !== undefined) {
            // previous song
            if (songIndex < 0) {
                audioPlayer.playSound(songs.length - 1);
                this.props.togglePlay(songs.length - 1, true);
            }
            // next song
            else if (songIndex + 1 > songs.length) {
                audioPlayer.playSound(0);
                this.props.togglePlay(0, true);
            }
            // when no index is passed
            else {
                audioPlayer.playSound(songIndex);
                // toggle when index is indentical, e.g. in case of pausing the song
                if (this.props.currentSong === index){
                    this.props.togglePlay(songIndex);
                }
                // play song with given index
                else {
                    this.props.togglePlay(songIndex, true);
                }
            }
        }
    };
    render() {
        const {currentSong} = this.props;
        return (
            <div className={styles.controlBar}>
                <img src={BackButton} className={styles.toggleButton} onClick={this.props.click}  alt="Toggle" />
                <div className={styles.trackInfo}>Nutshell • Alice In Chains</div>
                <img src={this.props.playing ? PauseButton: PlayButton} className={styles.play} onClick={() => this.onPlayRequested(currentSong)}/>
                <img src={NextButton} className={styles.nextButton} onClick={() => this.onPlayRequested(currentSong + 1)} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        playing: state.player.playing,
        currentSong: state.player.currentSong,
        activeRepeat: state.player.activeRepeat,
        activeShuffle: state.player.activeShuffle
    };
};

const mapDispatchToProps = dispatch => {
    return {
        togglePlay: (index, playing) => {
            dispatch(actions.togglePlay(index, playing))
        },
        toggleRepeat: () => {
            dispatch(actions.toggleRepeat())
        },
        toggleShuffle: () => {
            dispatch(actions.toggleShuffle())
        }
        
    };
};

export default (connect(mapStateToProps, mapDispatchToProps)(ControlBar));
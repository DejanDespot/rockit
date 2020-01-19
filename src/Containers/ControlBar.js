import React, { Component } from "react";
import styles from "../Styles/control_bar.scss";
import PreviousButton from "../Assets/Icons/previous.svg";
import PlayButton from "../Assets/Icons/play-button-inside-a-circle.svg";
import PauseButton from "../Assets/Icons/rounded-pause-button.svg";
import NextButton from "../Assets/Icons/next.svg";
import Timeline from "../Assets/Images/timeline.png";
import RepeatButton from "../Assets/Icons/repeat.svg";
import ShuffleButton from "../Assets/Icons/shuffle.svg";
import VolumeIcon from "../Assets/Icons/volume.svg";
import AudioPlayerService from "../Utils/audioPlayerService";
import * as actions from "../store/actions/player";
import { connect } from "react-redux";
import songs from "../Utils/songs";
import VolumeSlider from "../Containers/VolumeSlider";

const audioPlayer = AudioPlayerService;

class ControlBar extends Component {
  componentDidMount() {
    // enable the spacebar to function as a play trigger
    window.addEventListener("keyup", event => {
      if (event.code === "Space" || event.which === 32) {
        this.onPlayRequested(this.props.currentSong);
      }
    });
  }

  onPlayRequested = (index, value) => {
    // change global volume
    this.props.changeVolume((value / 100).toFixed(2));
    audioPlayer.changeVolume(value);
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
        if (this.props.currentSong === index) {
          this.props.togglePlay(songIndex);
        }
        // play song with given index
        else {
          this.props.togglePlay(songIndex, true);
        }
      }
    }
  };

  volumeSlider = volume => {
    this.props.changeVolume((volume / 100).toFixed(2));
    audioPlayer.changeVolume(volume);
  };

  render() {
    const { currentSong } = this.props;
    const { activeRepeat } = this.props;
    const { activeShuffle } = this.props;
    const { volume } = this.props;

    return (
      <div className={styles.controlbar}>
        <div className={styles.controlBlock}>
          <img
            src={PreviousButton}
            className={styles.prev}
            onClick={() => this.onPlayRequested(currentSong - 1)}
          />
          <img
            src={this.props.playing ? PauseButton : PlayButton}
            className={styles.play}
            onClick={() => this.onPlayRequested(currentSong)}
          />
          <img
            src={NextButton}
            className={styles.next}
            onClick={() => this.onPlayRequested(currentSong + 1)}
          />
        </div>
        <div className={styles.time}>
          <img src={Timeline} className={styles.timeline} />
        </div>
        <div className={styles.controlBlock}>
          <img
            className={activeRepeat && styles.active}
            src={RepeatButton}
            onClick={this.props.toggleRepeat}
          />
          <img
            className={activeShuffle ? styles.active : null}
            src={ShuffleButton}
            onClick={this.props.toggleShuffle}
          />
          <img src={VolumeIcon} />
          {/* <div className={styles.volumeBar}></div> */}
          <VolumeSlider
            value={volume}
            // volumeHandler={volume => this.volumeSlider(volume)}
            volumeHandler={value => this.onPlayRequested(value)}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    playing: state.player.playing,
    currentSong: state.player.currentSong,
    activeRepeat: state.player.activeRepeat,
    activeShuffle: state.player.activeShuffle,
    volume: state.player.volumeX
  };
};

const mapDispatchToProps = dispatch => {
  return {
    togglePlay: (index, playing) => {
      dispatch(actions.togglePlay(index, playing));
    },
    toggleRepeat: () => {
      dispatch(actions.toggleRepeat());
    },
    toggleShuffle: () => {
      dispatch(actions.toggleShuffle());
    },
    changeVolume: volume => {
      dispatch(actions.changeVolume(volume));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlBar);

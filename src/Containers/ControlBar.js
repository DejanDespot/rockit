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
import * as actions from "../Store/actions/player";
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

  onPlayRequested = index => {
    // intialize volume
    audioPlayer.changeVolume((this.props.volume / 100).toFixed(2));
    // define song index
    let songIndex = index || 0;
    // previous song
    if (songIndex < 0) {
      audioPlayer.playSound(songs.length - 1);
      this.props.togglePlay(songs.length - 1, true, songs[songs.length - 1]);
    }
    // next song
    else if (songIndex + 1 > songs.length) {
      audioPlayer.playSound(0);
      this.props.togglePlay(0, true, songs[0]);
    }
    // when no index is passed
    else {
      audioPlayer.playSound(songIndex);
      // toggle when index is indentical, e.g. in case of pausing the song
      if (this.props.currentSong === songIndex) {
        this.props.togglePlay(songIndex, undefined, songs[songIndex]);
      }
      // play song with given index
      else {
        this.props.togglePlay(songIndex, true, songs[songIndex]);
      }
    }
  };

  volumeSlider = volume => {
    this.props.changeVolume(volume);
    audioPlayer.changeVolume((volume / 100).toFixed(2));
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
          <img src={VolumeIcon} onClick={this.props.toggleMute} />
          {/* <div className={styles.volumeBar}></div> */}
          <VolumeSlider
            value={volume}
            volumeHandler={value => this.volumeSlider(value)}
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
    togglePlay: (index, playing, song) => {
      dispatch(actions.togglePlay(index, playing, song));
    },
    toggleRepeat: () => {
      dispatch(actions.toggleRepeat());
    },
    toggleShuffle: () => {
      dispatch(actions.toggleShuffle());
    },
    toggleMute: () => {
      dispatch(actions.toggleMute());
    },
    changeVolume: volume => {
      dispatch(actions.changeVolume(volume));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlBar);

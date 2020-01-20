import React, { Component } from "react";
import styles from "../../Styles/MobileView/control_drawer.scss";
import Repeat from "../../Assets/Icons/MobileView/repeat.svg";
import Previous from "../../Assets/Icons/MobileView/previous.svg";
import PauseButton from "../../Assets/Icons/MobileView/rounded-pause-button.svg";
import PlayButton from "../../Assets/Icons/MobileView/play-button-inside-a-circle.svg";
import Next from "../../Assets/Icons/MobileView/next.svg";
import Shuffle from "../../Assets/Icons/MobileView/shuffle.svg";
import Playlist from "../../Assets/Images/aic_dirt.jpg";
import Toggle from "../../Assets/Icons/MobileView/back.svg";
import VolumeSlider from "../VolumeSlider";
import VolumeIcon from "../../Assets/Icons/volume.svg";
import { connect } from "react-redux";

class ControlDrawer extends Component {
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
      if (this.props.currentSong === index) {
        this.props.togglePlay(songIndex);
      }
      // play song with given index
      else {
        this.props.togglePlay(songIndex, true, songs[index]);
      }
    }
  };

  volumeSlider = volume => {
    this.props.changeVolume(volume);
    audioPlayer.changeVolume((volume / 100).toFixed(2));
  };

  render() {
    let attachedClasses = [styles.ControlDrawer, styles.Close];
    if (this.props.open) {
      attachedClasses = [styles.ControlDrawer, styles.Open];
    }
    const { currentSong } = this.props;
    const { activeRepeat } = this.props;
    const { activeShuffle } = this.props;
    const { volume } = this.props;
    
    return (
      <div className={attachedClasses.join(" ")}>
        <div className={styles.ToggleButton}>
          <img src={Toggle} onClick={this.props.click} alt="Toggle" />
        </div>
        <div className={styles.TrackInfo}>
          <div>best of grunge</div>
          <img src={Playlist} />
          <div>down in a hole</div>
          <div>alice in chains</div>
        </div>
        <div className={styles.Volume}>
          <img src={VolumeIcon} />
          <VolumeSlider 
            value={volume}
            volumeHandler={value => this.volumeSlider(value)}/>
        </div>
        <div className={styles.TrackButtons}>
          <img 
            src={Repeat} 
            onClick={this.props.toggleRepeat}/>
          <div className={styles.MainControls}>
            <img 
              src={Previous} 
              onClick={() => this.onPlayRequested(currentSong - 1)} />
            <img 
              src={this.props.playing ? PauseButton : PlayButton}
              onClick={() => this.onPlayRequested(currentSong)} />
            <img src={Next} onClick={() => this.onPlayRequested(currentSong + 1)} />
          </div>
          <img 
            src={Shuffle} 
            className={activeShuffle ? styles.active : null}
            onClick={this.props.toggleShuffle}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(ControlDrawer);

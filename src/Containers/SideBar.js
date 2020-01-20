import React, { Component } from "react";
import styles from "../Styles/sidebar.scss";
import browseIcon from "../Assets/Icons/vinyl.svg";
import libraryIcon from "../Assets/Icons/music.svg";
import currentSong from "../Assets/Images/aic_dirt.jpg";
import Playlists from "../Components/Playlists";
import { connect } from "react-redux";

class SideBar extends Component {
  render() {
    const { song } = this.props;

    return (
      <div className={styles.sideBar}>
        <div>
          <div className={styles.sideBlock}>
            <div className={styles.title}>Main menu</div>
            <div className={styles.sideGroup}>
              <img src={browseIcon} />
              <div>Browse</div>
            </div>
            <div className={styles.sideGroup}>
              <img src={libraryIcon} />
              <div>My Library</div>
            </div>
          </div>
          <Playlists />
        </div>
        <div className={styles.sideBlock}>
          {song && (
            <React.Fragment>
              <img src={song.songPic} className={styles.songArt} />
              <div className={styles.currentTrack}>
                <div className={styles.artistName}>{song.artist}</div>
                <div>{song.name}</div>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    song: state.player.activeSong
  };
};

export default connect(mapStateToProps)(SideBar);

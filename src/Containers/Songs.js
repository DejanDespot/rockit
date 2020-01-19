import React, { Component } from "react";
import styles from "../Styles/main_section.scss";
import songs from "../Utils/songs";
import { connect } from "react-redux";
import classNames from "classnames";

class Songs extends Component {
  render() {
    const { currentSong } = this.props;

    return (
      <div className={styles.songs}>
        {songs.map((song, index) => {
          return (
            <div
              className={classNames(
                styles.song,
                currentSong === index && styles.active
              )}
              id={songs.id}
              key={song.id}
              onClick={() => this.props.onPlayHandle(index, song)}
            >
              <div>{index + 1}</div>
              <div>{song.name}</div>
              <div>{song.artist}</div>
              <div>{song.duration}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentSong: state.player.currentSong
  };
};

export default connect(mapStateToProps)(Songs);

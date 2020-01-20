import React, { Component } from "react";
import styles from "../Styles/main_section.scss";
import PlaylistImage from "../Assets/Images/aic_dirt.jpg";
import OptionsImg from "../Assets/Icons/options.svg";
import FilterImg from "../Assets/Icons/magnifying-glass.svg";
import Songs from "../Containers/Songs";

import AudioPlayerService from "../Utils/audioPlayerService";
import * as actions from "../Store/actions/player";
import { connect } from "react-redux";
// import songs from '../Utils/songs';
import Options from "../Components/Options";
import Dropdown from "../Components/Dropdown";
import WrapperAuto from "../Utils/WrapperAuto";

const audioPlayer = AudioPlayerService;

class MainSection extends Component {
  onPlayRequested = (index, song) => {
    audioPlayer.playSound(index);
    this.props.togglePlay(index, true, song);
  };

  render() {
    // onClick={this.props.closeAll}
    return (
      <div className={styles.mainSection}>
        <div className={styles.mainBlock}>
          <img src={PlaylistImage} className={styles.mainImage} />
          <div className={styles.infoAndButtons}>
            <div className={styles.info}>
              <p>Playlist</p>
              <div className={styles.playlistName}>Top pop 2019</div>
              <div className={styles.playlistNumbers}>
                <div>10 songs</div>
                <div>45 minutes</div>
              </div>
            </div>
            <div className={styles.buttons}>
              <div className={styles.play}>Play</div>
              <img
                className={this.props.optionsOpn && styles.Clicked}
                src={OptionsImg}
                onClick={this.props.toggleOptions}
              />
              <WrapperAuto
                change={this.props.change}
                className={styles.WrapperAuto}
              >
                <Options open={this.props.optionsOpn} />
              </WrapperAuto>
            </div>
          </div>
          {/* <WrapperAuto change={this.props.change} > */}
          <Dropdown open={this.props.dropdown} />
          {/* </WrapperAuto> */}
        </div>
        {/* <div className={classNames(styles.mainBlock, styles.lastBlock)}> */}
        <div className={styles.mainBlock}>
          <div className={styles.filter}>
            <img src={FilterImg} />
            <div className={styles.Form}>
              <input type="text" name="search" required autoComplete="off" />
              <label for="search" className={styles.LabelSearch}>
                <span className={styles.ContentSearch}>Search</span>
              </label>
            </div>
          </div>
          <div className={styles.list}>
            <div className={styles.infoLabels}>
              <div>#</div>
              <div>Title</div>
              <div>Artist</div>
              <div>Duration</div>
            </div>
            <Songs onPlayHandle={this.onPlayRequested} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    playing: state.player.playing,
    optionsOpn: state.player.optionsOpn,
    dropdown: state.player.dropdown
  };
};

const mapDispatchToProps = dispatch => {
  return {
    togglePlay: (index, playing, song) => {
      dispatch(actions.togglePlay(index, playing, song));
    },
    toggleOptions: () => {
      dispatch(actions.toggleOptions());
    },
    change: () => {
      dispatch(actions.change());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);

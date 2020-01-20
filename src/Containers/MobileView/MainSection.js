import React, { Component } from "react";
import styles from "../../Styles/MobileView/main_section.scss";
// import RecentPlaylists from './RecentPlaylists';
import Songs from "../MobileView/Songs";

import AudioPlayerService from "../../Utils/audioPlayerService";
import * as actions from "../../Store/actions/player";
import { connect } from "react-redux";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "../../Containers/MobileView/Search";

const audioPlayer = AudioPlayerService;

class MainSection extends Component {
  onPlayRequested = index => {
    audioPlayer.playSound(index);
    this.props.togglePlay(index, true);
  };

  render() {
    return (
      <Router>
        <div className={styles.MainSection}>
          <div className={styles.list}>
            <Switch>
              {/* <Route path="/" exact component={Songs} /> */}
              <Route path="/" exact component={() => <Songs onPlayHandle={(index) => this.onPlayRequested(index)} />} />
              <Route path="/search" component={Search} />
            </Switch>
          </div>
        </div>
      </Router>
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
    togglePlay: (index, playing) => {
      dispatch(actions.togglePlay(index, playing));
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

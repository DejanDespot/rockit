import React, { Component } from "react";
import styles from "../Styles/main_view.scss";
import NavBar from "../Components/NavBar";
import SideBar from "../Containers/SideBar";
import ControlBar from "../Containers/ControlBar";
import MainSection from "../Containers/MainSection";

class MainView extends Component {
  render() {
    return (
      <div className={styles.mainView}>
        <NavBar className={styles.NavBar} />
        <div className={styles.middle}>
          <SideBar className={styles.SideBar} />
          <MainSection className={styles.MainSection} />
        </div>
        <ControlBar className={styles.ControlBar} />
      </div>
    );
  }
}

export default MainView;

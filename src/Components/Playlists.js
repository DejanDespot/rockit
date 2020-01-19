import React from "react";
import styles from "../Styles/sidebar.scss";
import addPlaylist from "../Assets/Icons/plus.svg";

const playlists = () => (
  <div className={styles.sideBlock}>
    <div className={styles.title}>Playlists</div>
    <p>Top Pop 2019</p>
    <p>Workout metal for the gym</p>
    <p>Matt Corby Best of</p>
    <p>DnB mashup</p>
    <div className={styles.sideGroup}>
      <img src={addPlaylist} />
      <div>New Playlist</div>
    </div>
  </div>
);

export default playlists;

import React, { Component } from 'react';
import styles from '../Styles/main_section.scss';
import songs from '../Utils/songs';

class Songs extends Component {
    render() {
        return (
            <div className={styles.songs}>
            {console.log(songs)}
                {songs.map((song, index) => {
                    return (
                        <div className={styles.song} id={songs.id} key={song.id} onClick={() => this.props.onPlayHandle(index)}>
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

export default Songs;
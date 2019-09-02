import React, { Component } from 'react';
import styles from '../Styles/main_section.scss';

class Songs extends Component {
    render() {
        return (
            <div className={styles.songs}>
            {/* the 'song' components will be mapped later */}
                <div className={styles.song}>
                    <div>1</div>
                    <div>Leto je</div>
                    <div>Coby</div>
                    <div>3:23</div>
                </div>
                <div className={styles.song}>
                    <div>2</div>
                    <div>Biseri od zlata</div>
                    <div>Coby</div>
                    <div>3:16</div>
                </div>
                <div className={styles.song}>
                    <div>3</div>
                    <div>Samo jako</div>
                    <div>Coby feat. Stoja</div>
                    <div>4:16</div>
                </div>
                <div className={styles.song}>
                    <div>4</div>
                    <div>Zver</div>
                    <div>Coby</div>
                    <div>3:06</div>
                </div>
                <div className={styles.song}>
                    <div>5</div>
                    <div>Lukas</div>
                    <div>Coby</div>
                    <div>3:29</div>
                </div>
                <div className={styles.song}>
                    <div>6</div>
                    <div>Title</div>
                    <div>Coby feat. Senidah</div>
                    <div>2:59</div>
                </div>
                <div className={styles.song}>
                    <div>7</div>
                    <div>Mami</div>
                    <div>Coby</div>
                    <div>3:06</div>
                </div>
                <div className={styles.song}>
                    <div>8</div>
                    <div>Rambo</div>
                    <div>Coby</div>
                    <div>3:38</div>
                </div>
            </div>
        );
    }
}

export default Songs;
import React, {Component} from 'react';
import styles from '../../Styles/MobileView/control_bar.scss';
import BackButton from '../../Assets/Icons/back.svg';
import NextButton from '../../Assets/Icons/next.svg'; 
import PauseButton from '../../Assets/Icons/rounded-pause-button.svg';

class ControlBar extends Component {
    render() {
        return (
            <div className={styles.controlBar}>
                <img src={BackButton} className={styles.toggleButton} onClick={this.props.click}  alt="Toggle" />
                <div className={styles.trackInfo}>Biseri od zlata • Coby</div>
                <img src={PauseButton} className={styles.pauseButton} />
                <img src={NextButton} className={styles.nextButton} />
            </div>
        );
    }
}

export default ControlBar;
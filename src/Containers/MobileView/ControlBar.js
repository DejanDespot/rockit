import React, {Component} from 'react';
import styles from '../../Styles/MobileView/control_bar.scss';
import backButton from '../../Assets/Icons/back.svg';
import nextButton from '../../Assets/Icons/next.svg'; 
import pauseButton from '../../Assets/Icons/rounded-pause-button.svg';

class ControlBar extends Component {
    render() {
        return (
            <div className={styles.controlBar}>
                <img src={backButton} className={styles.ToggleButton} onClick={this.props.click}  alt="Toggle" />
                <div className={styles.trackInfo}>Biseri od zlata • Coby</div>
                <img src={pauseButton} className={styles.pauseButton} />
                <img src={nextButton} className={styles.nextButton} />
            </div>
        );
    }
}

export default ControlBar;
import React, { Component } from 'react';
// import {connect} from "react-redux";
// import styles from '../Styles/volume_slider.scss';

import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Tooltip from '@material-ui/core/Tooltip';
import Slider from '@material-ui/core/Slider'


const useStyles = makeStyles(theme => ({
  root: {
    width: 200 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const PrettoSlider = withStyles({
    root: {
      color: '#9B51E0',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus,&:hover,&$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
})(Slider);

export default function VolumeSlider() {
    // render() {

        const classes = useStyles();
        return(
            <div className={classes.root}>   
                {/* <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />   */}
                <PrettoSlider min={0} max={100} defaultValue={50} step={1} valueLabelDisplay="auto" aria-label="pretto slider" onChange={(event) => props.volumeHandler(event.target.value)} />
            </div>
        );
    // }
}

// const mapStateToProps = state => {
//     return {
//         volumeX: state.player.volumeX
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         changeVolume: (volume) => {
//             dispatch(actions.changeVolume(volume))
//         }
//     };
// };

// export default (connect(mapStateToProps, mapDispatchToProps)(VolumeSlider));
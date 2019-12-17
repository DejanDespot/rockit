import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../Styles/wrapper_auto.scss';
 
class WrapperAuto extends Component {
 
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    };
 
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef = (node) => {
        this.wrapperRef = node;
    };
 
    handleClickOutside = (event) => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.props.change();
        }
    };
 
    render() {
        return (
            <div ref={this.setWrapperRef} className={styles.WrapperAuto} >
                {this.props.children}
            </div>
        )
    }
}
 
WrapperAuto.propTypes = {
    change: PropTypes.func.isRequired
};
 
WrapperAuto.defaultProps = {
    change:  ""
};
 
export default WrapperAuto;
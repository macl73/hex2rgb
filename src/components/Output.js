import React from 'react';
import PropTypes from 'prop-types';

export default function Output(props) {
    const {color} = props;
    const {inputError} = props;

    function hex2rgb(c) {
        var bigint = parseInt(c.split('#')[1], 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;
    
        return 'rgb(' + r + ',' + g + ',' + b + ')';
    };

    const styles = {
        width: "208px", 
        height: "26px", 
        backgroundColor: "#ffffff", 
        marginTop: "5px"
    };

    return <div style={styles}><span>{inputError ? "О Ш И Б К А !" : hex2rgb(color.backgroundColor)}</span></div>
};


Output.propTypes = {
    color: PropTypes.object
};
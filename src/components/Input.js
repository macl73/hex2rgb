import React from 'react';
import PropTypes from 'prop-types';

export default function Input({onColorChange}) {

    const styles = {
        width: "200px", 
        height: "20px"
    };

    return <input type="text" className="inputHEX" name="inputHEX" onChange={onColorChange} style={styles} />
};

Input.propTypes = {
    onColorChange: PropTypes.func
};
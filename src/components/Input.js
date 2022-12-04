import React from 'react';
import PropTypes from 'prop-types';

export default function Input(props) {
    const {onColorChange} = props;
    return <input type="text" className="inputHEX" name="inputHEX" onChange={onColorChange} style={{width: "200px", height: "20px"}} />
};

Input.propTypes = {
    onColorChange: PropTypes.func
};
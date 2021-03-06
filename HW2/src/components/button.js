import React from 'react';
import PropTypes from 'prop-types';


const BtnFunc = ({value,onClick})=>(
    <button className="calculate__board--btn" value={value} onClick={onClick}>{value}</button>
);

BtnFunc.prototype={
    value:PropTypes.func.isRequired,
    onClick:PropTypes.func.isRequired,
}

export default BtnFunc;

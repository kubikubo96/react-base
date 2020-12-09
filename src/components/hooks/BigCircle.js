import React from 'react';
import useMagicColor from './useMagicColor'

function BigCircle(props) {
    const color = useMagicColor();
    return (
        <div className="big-circle" style={{backgroundColor: color}}>
            Big Circle
        </div>
    );
}

export default BigCircle;

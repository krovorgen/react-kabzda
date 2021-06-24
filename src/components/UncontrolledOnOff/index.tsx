import React, { FC, useState } from 'react';

interface IUncontrolledOnOffOnOffProps {}

const UncontrolledOnOffOnOff: FC<IUncontrolledOnOffOnOffProps> = () => {
    let [activeColor, setActiveColor] = useState<'Active' | 'Disable'>('Active');
    const onStyle = {
        background: 'none',
        padding: '4px',
        backgroundColor: activeColor === 'Active' ? 'red' : 'green',
    };

    const offStyle = {
        background: 'none',
        padding: '4px',
        backgroundColor: activeColor === 'Active' ? 'green' : 'red',
    };

    const indicatorStyle = {
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        border: '1px solid #000',
        backgroundColor: activeColor === 'Active' ? 'green' : 'red',
    };
    return (
        <div>
            <button style={onStyle} onClick={() => setActiveColor('Active')}>
                ON
            </button>
            <button style={offStyle} onClick={() => setActiveColor('Disable')}>
                OFF
            </button>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default UncontrolledOnOffOnOff;

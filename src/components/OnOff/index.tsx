import React, { FC } from 'react';

export type ActiveColorType = 'Active' | 'Disable';

export interface IOnOffProps {
    activeColor: ActiveColorType;
    setActiveColor: (value: ActiveColorType) => void;
}

const OnOff: FC<IOnOffProps> = ({ activeColor, setActiveColor }) => {
    const onStyle = {
        background: 'none',
        padding: '4px',
        backgroundColor: activeColor === 'Active' ? 'red' : 'green',
        cursor: 'pointer',
    };

    const offStyle = {
        background: 'none',
        padding: '4px',
        backgroundColor: activeColor === 'Active' ? 'green' : 'red',
        cursor: 'pointer',
    };

    const indicatorStyle = {
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        border: '1px solid #000',
        backgroundColor: activeColor === 'Active' ? 'green' : 'red',
    };

    const onClicked = () => {
        setActiveColor('Active');
    };

    const offClicked = () => {
        setActiveColor('Disable');
    };

    return (
        <div>
            <button style={onStyle} onClick={onClicked}>
                ON
            </button>
            <button style={offStyle} onClick={offClicked}>
                OFF
            </button>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOff;

import React, { FC } from 'react';

export type ActiveColorType = 'Active' | 'Disable';

interface IUncontrolledOnOffProps {
    activeColor: ActiveColorType;
    setActiveColor: (value: ActiveColorType) => void;
}

const UncontrolledOnOff: FC<IUncontrolledOnOffProps> = ({ activeColor, setActiveColor }) => {
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

export default UncontrolledOnOff;

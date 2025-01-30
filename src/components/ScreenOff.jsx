import { useState, useEffect } from 'react';
import './ScreenOff.css';

const ScreenOff = () => {

    

    return (
        <div className='screen-off'>
            <div className='day-time-container'>
                <div className='day'>{day}</div>
                <div className='time'>{time}</div>
            </div>

            <div className='icons'>
                <div className='icon-1' />
                <div className='icon-2'/>
            </div>
        </div>
    );
};

export default ScreenOff;

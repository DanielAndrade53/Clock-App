import { useState, useEffect } from 'react';
import './ScreenOff.css';

const ScreenOff = () => {

    

    return (
        <div className='screen-off'>
           
            <div className='day-time-container'>
                <div className='day'>4</div>
                <div className='timer'>5</div>
            </div>

            <div className='bottom-icons'>
                <div className='icon-flashlight'>
                    <img src='' alt='' />
                </div>
                <div className='icon-camera'>
                    <img src='' alt='' />
                </div>
            </div>
        </div>
    );
};

export default ScreenOff;

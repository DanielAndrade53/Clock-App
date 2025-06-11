import { useState, useEffect } from 'react';
import '../styles/ScreenOff.css';

const ScreenOff = () => {

    const [unlock, setUnlock] = useState(null);

    const unlockPhone = () => {
        setUnlock(prevState => !prevState);
    };

    const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    
        useEffect(() => {
            const timeInterval = setInterval(() => {
                setTime(new Date().toLocaleTimeString([], {hour : '2-digit', minute : '2-digit'}));
            }, 1000);
    
            return () => clearInterval(timeInterval);
        }, []);


    return (
        <div className='screen-off'>
           
            <div className='top-container'> 
                <div className={`lock-icon ${unlock ? 'unlocked' : 'locked'}`}>
                    {unlock ? (
                        <img src='src/assets/lock.png' alt='' />
                    ) : (
                        <img src='' alt='' />
                    )}
                </div>  
                <div className='day-time-container'>
                    <div className='day'>Tuesday, February 4</div>
                    <div className='timer'>{time}</div>
                </div>
            </div>

            <div className='bottom-icons'>
                <div className='icon-flashlight'>
                    <img src='src/assets/torch.png' alt='Torch Icon'/>
                </div>
                <div className='icon-camera'>
                    <img src='src/assets/camera.png' alt='' />
                </div>
            </div>

            <div className='bar-off' onClick={unlockPhone} />
        </div>
    );
};
export default ScreenOff;

import { useState } from 'react';
import './ScreenOn.css';
import ClockApp from './ClockApp';

const ScreenOn = () => {
    const [activeApp, setActiveApp] = useState(null);

    const openApp = (appName) => {
        setActiveApp(appName);
    };

    const closeApp = () => {
        setActiveApp(null);
    };

    return (
        <div className='screen-on'>

            {activeApp === 'clock' ? (
                <div className="full-screen-app">
                    <ClockApp />
                    <div className='bar-on' onClick={closeApp}></div>
                </div>
            ) : (
                <div className='apps-container'>
                    <div className='calendar-container'>{/* Calendar Here */}</div>

                    <div className='app-icon'>App 1</div>
                    <div className='app-icon'>App 2</div>
                    <div className='app-icon'>App 3</div>
                    <div className='app-icon'>App 4</div>
                    
                    <div className='weather-container'></div>

                    <div className='app-icon'>App 5</div>
                    <div className='app-icon'>App 6</div>
                    <div className='app-icon'>App 7</div>
                    
                    <div className='app-icon' onClick={() => openApp('clock')}>
                        <img className='icon' src='src/assets/clock-app.png' alt=''/>
                    </div>

                    <div className='app-icon'>App 9</div>
                    <div className='app-icon'>App 10</div>
                    <div className='app-icon'>App 11</div>
                    <div className='app-icon'>App 12</div>

                    <div className='search-container'>
                        <search className='search'>Search</search>
                    </div>

                    <div className='footer-container'>
                        <div className='app-icon'>App 13</div>
                        <div className='app-icon'>App 14</div>
                        <div className='app-icon'>App 15</div>
                        <div className='app-icon'>App 16</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ScreenOn;

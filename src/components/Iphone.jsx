import { React, useEffect, useState } from 'react'
import '../styles/Iphone.css'

import ScreenOn from './ScreenOn'
import ScreenOff from './ScreenOff'

/*
DAR FIX DO SILENCE-MODE
E METER O VOLUME A APARECER. COM <SCREEN> DEIXA DE FUNCIONAR
OU SEJA BUTTONS NAO FUNCIONAM DIREITO
*/

const Iphone = () => {

    const [activeButton, setActiveButton] = useState(null);
    const [timerActive, setTimerActive] = useState(false); 
    const [showSilenceMode, setShowSilenceMode] = useState(false);
    const [phoneState, setPhoneState] = useState('off');
    
    const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

    useEffect(() => {
        const timeInterval = setInterval(() => {
            setTime(new Date().toLocaleTimeString([], {hour : '2-digit', minute : '2-digit'}));
        }, 1000);

        return () => clearInterval(timeInterval);
    }, []);

    const phoneStateVar = (state) => {
        setPhoneState(state);
    };

    const [flashOn, setFlashOn] = useState(false);

    const toggleFlash = () => {
        setFlashOn(prevState => !prevState);
    };


    return (
    <div className='scene'>
        
        <div className='phone-con'>

            <div className='phone-on' />
            <div className='phone-off' />

            <div className='back-phone'>
                <div className='cameras-container'>
                    <div className='main-camera'>
                        <div className='lens' />
                    </div>
                    <div className='telefoto'>
                        <div className='lens' />
                    </div>
                    <div className='ultrawide'>
                        <div className='lens' />
                    </div>
                    <div className='flash' onClick={toggleFlash}>
                        {flashOn ? 
                            (
                                <div className='flash-on' />
                            ) : (
                                <div className='flash-off'/>
                            )}
                    </div>
                    <div className='depth'></div>
                    <div className='hole'></div>
                </div>
            </div>

            <div className='front-phone'>

                <div className='buttons'>
                    <div className='left'>

                        <div className='button'></div>
                        <div className='button'></div>
                        <div className='button'></div>
                    </div>

                    <div className='right'>
                        <div className='button' onClick={() => {if(phoneState==='off') phoneStateVar('on'); else phoneStateVar('off')}}></div>
                    </div>
                </div>

                <div className='screen-container'>

                    {phoneState === 'on' ? <ScreenOn />  : <ScreenOff /> } 

                    <div className='time'> {time} </div>

                    <div className='battery'> 100% </div>

                    <div className='notch-container'>
                        <div className='notch'>
                            {showSilenceMode && <div className='silence-mode active'></div>}
                        </div>
                    </div>

                    {activeButton === 2 && <div className='volume-up'></div>}
                    {activeButton === 3 && <div className='volume-down'></div>}
                   
                </div>

                <div className='camera'></div>

                {/*
                <div className='bar-container'>
                    <div className='bar'></div>
                </div> 
                */}

            </div>
        </div>
    </div>
  );
};

export default Iphone;
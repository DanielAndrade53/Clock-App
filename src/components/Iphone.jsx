import { React, useEffect, useState } from 'react';
import './Iphone.css'; 

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


    const handleClick = (buttonNumber) => {
      setActiveButton(buttonNumber);
      setTimerActive(true);

      if (buttonNumber === 1) {

        setShowSilenceMode((prev) => !prev);

        console.log(`Pressed ${buttonNumber}`);
        setTimeout(() => {
          setShowSilenceMode(false);
          setTimerActive(false);
          setActiveButton(null); 
        }, 1000);
      }

      else if (buttonNumber === 2) {
        console.log(`Pressed ${buttonNumber}`);
        setTimeout(() => {
            setTimerActive(false)
            setActiveButton(null); 
        }, 3000 );
      }

      else if (buttonNumber === 3) {
        console.log(`Pressed ${buttonNumber}`);
        setTimeout(() => {
            setTimerActive(false)
            setActiveButton(null); 
        }, 3000);
      }
    };


    return (
    <div className='scene'>
        
        <div className='phone-con'>

            <div className='phone-on' />
            <div className='phone-off' />

            <div className='back-phone'>
                <div className='cameras-container'>
                    <div className='main-camera'></div>
                    <div className='telefoto'></div>
                    <div className='ultrawide'></div>
                    <div className='flash'></div>
                    <div className='OTHER'></div>
                </div>
            </div>

            <div className='front-phone'>

                <div className='buttons'>
                    <div className='left'>

                        <div className='button' onClick={() => handleClick(1)}></div>
                        <div className='button' onClick={() => handleClick(2)}></div>
                        <div className='button' onClick={() => handleClick(3)}></div>
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
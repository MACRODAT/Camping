import React, { useState } from 'react';
import state1 from '../images/state1.png';
import state2 from '../images/state2.png';
import state3 from '../images/state3.png';
import back from '../images/back.png';
import { useDispatch } from 'react-redux';
import { setLink } from '../store/actions';

const StateData = () => {
  
  const dispatch = useDispatch();

  return (
    <div>
      <div id="titleState">
        <img src={back} alt="state image 1" 
            className='imageinvert cursor' 
            onClick={() => dispatch(setLink(''))}
            style={{width: '35px', height: '35px', alignSelf: 'center'}}/>
        <h2 id="" style={{color: 'white', alignSelf: 'center', marginLeft: '10px'}}>State data</h2>
      </div>
      <img src={state1} alt="state image 1" className='stateimage' />
      <img src={state2} alt="state image 2" className='stateimage' />
      <img src={state3} alt="state image 3" className='stateimage' />
    </div>
  );
};

export default StateData;

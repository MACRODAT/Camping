import React from 'react';
import Home from './home';
import { useSelector } from 'react-redux';
import LandingPage from './QuickLanding';


function QuickSelector() {
  const route = useSelector(state => state.link)


  return (
    <div className='w-100 h-100'>
		{
			route == "landing" ? <LandingPage /> 
			: <Home />
		}
	</div>
  );
}

export default QuickSelector;

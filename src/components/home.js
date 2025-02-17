import React from 'react';
import '../styles/main.scss';
import tent from '../images/tent.svg'; // Adjust the path based on your file structure
import QuickForm from '../components/QuickForm';
import QuickMap from '../components/QuickMap';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { setLink } from '../store/actions';
import StateData from '../components/stateData';
import QuickSummary from './QuickSummary';
import WebsiteData from './websitedata';
import QuickSignup from './QuickSignup';
import QuickLogin from './QuickLogin';


function Home() {

  const link_ = useSelector(state => state.link);
  const p = useSelector(state => state.profile_);
  const dispatch = useDispatch();

  return (
      <div className="boxtainer">
        <div className="left-pane">
          
          <div className="row" id="title-bar">
            <div className="col col-2">
              <img src={tent} alt="Logo" className="logo" />
            </div>
            
            <div className="col col-2 d-none d-md-block" id="title">
              CAMP
            </div>
            <div className="col d-none d-md-block" id="desc">
              Find your trip !
            </div>
          </div>

          <div className='container' style={{padding: '0', margin: '0'}}>
            {
              p?.loggedIn ?
              (
                <div className='row' id="showCamps">
                  <div 
                  className='col col-8'>
                      {p.email}
                  </div>
                  <div 
                    onClick={() => dispatch(setLink('account'))}
                    className='col col-4 cursor'>
                      My profile
                  </div>
                </div>
              )
              :
              (
                <div className='row' id="showCamps">
                  <div 
                  onClick={() => dispatch(setLink('login'))}
                  className='col col-6 cursor'>
                      Login
                  </div>
                  <div 
                    onClick={() => dispatch(setLink('signup'))}
                    className='col col-6 cursor'>
                      Sign up
                  </div>
                </div>
              )
            }
            <div className='row' id="showCamps">
              <div className='col col-6'>
                  Useful links
              </div>
              <div 
                onClick={() => dispatch(setLink('state'))}
                className='col col-2 d-none d-md-block cursor'>
                State data
              </div>
              <div 
              onClick={() => dispatch(setLink('website'))}
              className='col col-2 d-none d-md-block cursor'>
                Website data
              </div>
              <div className='col col-2 d-none d-md-block cursor'>
                About
              </div>
            </div>
            
          </div>

          <QuickForm />
          <QuickSummary />
          <h4 className='cursor' style={{color: 'coral', fontSize: '16px', margin: '4px', alignSelf: 'flex-end', }}>
            About me
          </h4>
        </div>

        <div className="right-pane">
          {
            link_ == "" ? 
            <div id="map" style={{width: '100%', height: '100%'}}>
              <QuickMap />
            </div>
            : <></>
          }
          {
            link_ == "state" ? 
            <div id="stateRender" style={{width: '100%', height: '100%'}}>
              <StateData />
            </div>
            : <></>
          }
          {
            link_ == "website" ? 
            <div id="stateRender" style={{width: '100%', height: '100%'}}>
              <WebsiteData />
            </div>
            : <></>
          }
          {
            link_ == "signup" ? 
            <div id="newRender" style={{width: '100%', height: '100%'}}>
              <QuickSignup />
            </div>
            : <></>
          }
          {
            link_ == "login" ? 
            <div id="newRender" style={{width: '100%', height: '100%'}}>
              <QuickLogin />
            </div>
            : <></>
          }
        </div>
      </div>
  );
}

export default Home;

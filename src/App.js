import React from 'react';
import './styles/main.scss';
import tent from './images/tent.svg'; // Adjust the path based on your file structure
import QuickForm from './components/QuickForm';
import QuickMap from './components/QuickMap';
import store from './store/store';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={store}>
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

          <QuickForm />
          <h4 style={{color: 'coral', fontSize: '16px', margin: '4px', alignSelf: 'flex-end', }}>
            About me
          </h4>
        </div>

        <div className="right-pane">
          <div id="map" style={{width: '100%', height: '100%'}}>
            <QuickMap />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;

import React from 'react';
import './styles/main.scss';
import store from './store/store';
import { Provider} from 'react-redux';
import Home from './components/home';


function App() {

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;

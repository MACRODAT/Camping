import React from 'react';
import './styles/main.scss';
import store from './store/store';
import { Provider} from 'react-redux';
import Home from './components/home';
import QuickSelector from './components/QuickSelector';


function App() {

  return (
    <Provider store={store}>
      <QuickSelector />
    </Provider>
  );
}

export default App;

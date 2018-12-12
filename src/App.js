import React, { Component } from 'react';
import store from './Redux/Store/store';
import {Provider} from 'react-redux';
import ControlPanel from './Component/ControlPanel';
import './Style/common.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ControlPanel />
      </Provider>
    );
  }
}

export default App;

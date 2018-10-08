import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './src/reducers';
import reduxThunk from 'redux-thunk';

import Navigation from './src/navigation';


const storeWithMiddleware =  applyMiddleware(reduxThunk)(createStore);

class App extends Component {
  render() {
    return (
      <Provider store={storeWithMiddleware(rootReducer)}>
        <Navigation />
      </Provider>
    )
  }
}

export default App;

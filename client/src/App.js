import React, { Component } from 'react';
import logo from './logo.svg';
import { Router, Route, withRouter } from 'react-router-dom';
import './App.css';
import User from './User';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({
      maxAge: 25,
      shouldRecordChanges: false,
});

const store = createStore((state = {}, action) => {
  // switch (action){
  //   case (action === 'getUser'){

  //   }
  // }
  return state
}, {}, composeEnhancers(applyMiddleware(thunkMiddleware)));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <h2 className="Project-title">Best of luck from PeopleGrove. <span role="img" aria-label="ThumbsUp">👍</span></h2>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Route path="/user/:user_id" component={User} />
        </div>
      </Provider>
    );
  }
}

export default App;

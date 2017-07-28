/* @flow */
import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import reducers from './reducers';
import { Button, Spinner, Input, Header, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

const Wrapper = styled.View`
  margin-top: 0;
`;

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyB2KcEDer6Uy5ztSKPXhqzYVscP5HaZ--U',
      authDomain: 'grider-manager.firebaseapp.com',
      databaseURL: 'https://grider-manager.firebaseio.com',
      projectId: 'grider-manager',
      storageBucket: 'grider-manager.appspot.com',
      messagingSenderId: '857335879516'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Wrapper>
          <Header>S A R O N I A</Header>
          <LoginForm />
        </Wrapper>
      </Provider>
    );
  }
}

export default App;

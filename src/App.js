/* @flow */
import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import reducers from './reducers';

const Wrapper = styled.View``;

const Text = styled.Text``;

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
    return (
      <Provider store={createStore(reducers)}>
        <Wrapper>
          <Text>Hello World</Text>
        </Wrapper>
      </Provider>
    );
  }
}

export default App;

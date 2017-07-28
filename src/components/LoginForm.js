/* @flow */
import React, { Component } from 'react';
import { reduxForm, Field, SubmissionError, type FormProps } from 'redux-form';
import styled from 'styled-components/native';
import firebase from 'firebase';

import { Card, CardSection, Input, Button, Spinner } from './common';

type Values = {
  email: string,
  password: string
};

type Props = {
  loginUser: () => void
} & FormProps;

const SpinnerWrapper = styled.View`
  flex: 1;
  align-items: center;
`;

class LoginForm extends Component<void, Props, void> {
  submit = ({ email, password }: Values) =>
    firebase.auth().signInWithEmailAndPassword(email, password).catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(() => {
        throw new SubmissionError({ _error: 'Authentication Failed.' });
      });
    });

  renderButton() {
    return this.props.submitting
      ? <SpinnerWrapper>
          <Spinner size="large" />
        </SpinnerWrapper>
      : <Button fluid onPress={this.props.handleSubmit(this.submit)}>
          Login
        </Button>;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Field name="email" placeholder="seetha@saronia.io" component={Input} />
        </CardSection>
        <CardSection>
          <Field name="password" secureTextEntry placeholder="s3cr3t" component={Input} />
        </CardSection>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

export default reduxForm({ form: 'LOGIN_FORM' })(LoginForm);

/* @flow */
import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

type Props = {
  size: 'small' | 'large'
};

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
`;

const Spinner = ({ size }: Props) =>
  <Wrapper>
    <ActivityIndicator size={size} />
  </Wrapper>;

Spinner.defaultProps = {
  size: 'large'
};

export default Spinner;

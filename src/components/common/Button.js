/* @flow */
import React, { Children } from 'react';
import styled from 'styled-components/native';

type Props = {
  onPress: Function,
  children: Children,
  fluid: boolean,
};

const Wrapper = styled.TouchableOpacity`
  flex: ${props => props.fluid ? '1' : 'none'};
  align-self: stretch;
  background-color: #fff;
  border-radius: 5px;
  border-width: 1px;
  border-color: #007aff;
  margin-left: 5;
  margin-right: 5;
`;

const Text = styled.Text`
  align-self: center;
  color: #007aff;
  font-size: 16;
  font-weight: 600;
  padding-top: 10;
  padding-bottom: 10;
`;

const Button = ({ onPress, children, fluid }: Props) =>
  <Wrapper fluid={fluid} onPress={onPress}>
    <Text>{children}</Text>
  </Wrapper>;

export default Button;

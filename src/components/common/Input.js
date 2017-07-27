/* @flow */
import React from 'react';
import styled from 'styled-components/native';

type Props = {
  label?: string,
  value: string,
  onChangeText: Function,
  placeholder?: string,
  secureTextEntry?: boolean,
  autoCorrect?: boolean
};

const Wrapper = styled.View`
  height: 40px;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const Label = styled.Text`
  font-size: 18px;
  padding-left: 20px;
  flex: 1;
`;

const TextInput = styled.TextInput`
  color: #000;
  padding-right: 5px;
  padding-left: 5px;
  font-size: 18px;
  line-height: 23px;
  flex: 2;
`;

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, autoCorrect }: Props) =>
  <Wrapper>
    {label &&
      <Label>
        {label}
      </Label>}
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      autoCorrect={autoCorrect}
    />
  </Wrapper>;

Input.defaultProps = {
  autoCorrect: false
};

export default Input;

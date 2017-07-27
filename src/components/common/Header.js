/* @flow */
import React from 'react';
import styled from 'styled-components/native';

type Props = {
  children: string
};

const Wrapper = styled.View`
  background-color: #F8F8F8;
  justify-content: center;
  align-items: center;
  height: 60px;
  padding-top: 15px;
  shadow-color: #000;
  shadow-offset: { width: 0, height: 2px };
  shadow-opacity: 0.2;
  elevation: 2;
  position: relative;
`;

const Title = styled.Text`
  font-size: 20px;
`;

const Header = ({ children }: Props) =>
  <Wrapper>
    <Title>
      {children}
    </Title>
  </Wrapper>;

export default Header;

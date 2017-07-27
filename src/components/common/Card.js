/* @flow */
import React, { Children } from 'react';
import styled from 'styled-components/native';

type Props = {
  children: Children
};

const CardWrapper = styled.View`
  border-width: 1px;
  border-radius: 2px;
  border-color: #ddd;
  border-bottom-width: 0;
  shadow-color: #000;
  shadow-offset: { width: 0, height: 2px };
  shadow-opacity: 0.1;
  shadow-radius: 2;
  elevation: 1;
  margin-left: 5;
  margin-right: 5;
  margin-top: 10px;
`;

const Card = ({ children }: Props) =>
  <CardWrapper>
    {children}
  </CardWrapper>;

const CardSectionWrapper = styled.View`
  border-bottom-width: 1px;
  border-color: #ddd;
  padding: 5px;
  background-color: #fff;
  justify-content: flex-start;
  flex-direction: row;
  position: relative;
`;

const CardSection = ({ children }: Props) =>
  <CardSectionWrapper>
    {children}
  </CardSectionWrapper>;

export { Card, CardSection };

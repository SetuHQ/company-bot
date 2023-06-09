import React from 'react';
import { SpinnerStyled } from './Spinner.styled';

export interface SpinnerProps {
  primaryColor?: string;
}
export const Spinner = ({ primaryColor }: SpinnerProps) => (
  <SpinnerStyled primaryColor={primaryColor}>
    <div className="spinner" />
  </SpinnerStyled>
);

import React from 'react';
import { SpinnerStyled } from './Spinner.styled';

export interface SpinnerProps {
  modalColor?: string;
}
export const Spinner = ({ modalColor }: SpinnerProps) => (
  <SpinnerStyled modalColor={modalColor}>
    <div className="spinner" />
  </SpinnerStyled>
);

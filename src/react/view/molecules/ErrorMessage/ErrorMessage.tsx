import React from 'react';
import {  Typography } from '@material-ui/core';
import './ErrorMessage.scss';

export interface IErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FunctionComponent<IErrorMessageProps> = ({message}) => (
  <>
    <div className={'error-message'}>
      <Typography variant="body1">{message}</Typography>
    </div>
  </>
);

export default ErrorMessage;

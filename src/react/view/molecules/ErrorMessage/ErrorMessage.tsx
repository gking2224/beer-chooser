import React from 'react';
import {  Typography, Theme } from '@material-ui/core';
import './ErrorMessage.scss';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    color: '#f00'
  }
};

export interface IErrorMessageProps {
  message: string;
  classes: any;
}

const ErrorMessage: React.FunctionComponent<IErrorMessageProps> = ({message, classes}) => (
  <div className={classes.root}>
    <Typography variant="body1">{message}</Typography>
  </div>
);

export default withStyles(styles)(ErrorMessage);

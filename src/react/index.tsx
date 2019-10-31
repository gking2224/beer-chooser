import * as React from 'react';
import ReactDOM from 'react-dom';
import {App, Layout} from './view/containers';
import CssBaseline from '@material-ui/core/CssBaseline';
import './styles.scss';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const root = document.getElementById('root') as any;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#dc143d'
    }
  },
});

const Root = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Layout>
      <App />
    </Layout>
  </MuiThemeProvider>
);

const doRender = (Component: any) => {
  ReactDOM.render(<Component />, root);
};

doRender(Root);

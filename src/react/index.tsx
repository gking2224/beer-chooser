import * as React from 'react';
import ReactDOM from 'react-dom';
import {App, Layout} from './view/containers';
import CssBaseline from '@material-ui/core/CssBaseline';
import './styles.scss';

const root = document.getElementById('root') as any;

const Root = () => (
  <>
    <CssBaseline />
    <Layout>
      <App />
    </Layout>
  </>
);

const doRender = (Component: any) => {
  ReactDOM.render(<Component />, root);
};

doRender(Root);

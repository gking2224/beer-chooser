import * as React from 'react';
import './Layout.scss';
import {Typography} from '@material-ui/core'

interface ILayoutProps {
  children: JSX.Element;
}
const Layout: React.FunctionComponent<ILayoutProps> = ({children}) => (
  <main className={'layout'}>
    <Typography variant='h1'>Jacek's Beer Chooser</Typography>
    <section className={'layout__body'}>
      {children}
    </section>
  </main>
);

export default Layout;
